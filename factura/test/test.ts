import { Factura } from "../models/factura.model";
import { Producto } from "../models/producto.models";

describe("Factura y Producto, clases y metodos", () => {
  test("Calcular los impuestos [12%] de un una cantidad [2] de un producto con un precio [1.5] y devolver [0.36] con e metodo #calcularImp", () => {
    // AAA (SAA)

    // Arranque (Start)
    const precioProducto = 1.5;
    const cantidad = 2;
    const producto = new Producto("", "Leche", precioProducto, cantidad);

    const impuestoExpected = 0.36;

    let impuesto: number;

    // Act

    impuesto = producto.calcularImp();

    // Assert

    expect(impuesto).toBe(impuestoExpected);
  });

  test("Calcular el subtotal de un una cantidad [2] de un producto con un precio [1.5] y devolver [3] con el metodo #calcSutotalProducto", () => {
    const precioProducto = 1.5;
    const cantidad = 2;
    const producto = new Producto("", "Leche", precioProducto, cantidad);

    const calcSutotalProductoExpected = 3;

    let subtotal: number;

    subtotal = producto.calcSutotalProducto();

    expect(subtotal).toBe(calcSutotalProductoExpected);
  });

  test("Calcular el subtotal, impuestos y total de una lista de productos[3] y devolver [{subtotal:21.50, impuestos:2.58, total: 24.08} con el metodo #calcTotales", () => {
    const p1 = new Producto("", "Leche", 2, 2.5);
    const p2 = new Producto("", "Pan", 10, 0.15);
    const p3 = new Producto("", "Queso", 2, 7.5);
    // const p4 = new Producto("", "Pan", 5, 0.15);

    const productos: Producto[] = [p1, p2, p3];
    const factura = new Factura(productos);
    // const producto = new Producto("", "Leche", precioProducto, cantidad);

    const calcTotalesExpected = {
      subtotal: 21.5,
      impuestos: 2.58,
      total: 24.08,
    };
    // const calcSutotalProductoExpected = 0.36;

    let calcTotales: { subtotal: number; impuestos: number; total: number };

    calcTotales = factura.calcTotales();

    expect(calcTotales).toEqual(calcTotalesExpected);
  });

  test("Agregar poductos a la lista de productos, se van a agregar [3] productos a la lista usando el metodo #agregarProducto y se va a verificar que el objeto factura tenga  [3] productos", () => {
    const p1 = new Producto("", "Leche", 2, 2.5);
    const p2 = new Producto("", "Pan", 10, 0.15);
    const p3 = new Producto("", "Queso", 2, 7.5);
    // const p4 = new Producto("", "Pan", 5, 0.15);

    const productos: Producto[] = []; // [p1,p2,p3]
    const factura = new Factura(productos);

    factura.agregarProducto(p1);
    factura.agregarProducto(p2);
    factura.agregarProducto(p3);

    const nProductosexpected = 3;

    let nProductos: number;

    nProductos = factura.productos.length;

    expect(nProductos).toBe(nProductosexpected);
  });

  test("Agregar poductos a la lista de productos, se van a agregar [4] productos a la lista uno de los productos repetido con otra cantidad,usando el metodo #agregarProducto y se va a verificar que el objeto factura tenga  [3] productos", () => {
    const p1 = new Producto("", "Leche", 2, 2.5);
    const p2 = new Producto("", "Pan", 10, 0.15);
    const p3 = new Producto("", "Queso", 2, 7.5);
    const p4 = new Producto("", "Pan", 5, 0.15);

    const productos: Producto[] = []; // [p1,p2,p3]
    const factura = new Factura(productos);

    factura.agregarProducto(p1);
    factura.agregarProducto(p2);
    factura.agregarProducto(p3);
    factura.agregarProducto(p4);

    const nProductosexpected = 3;

    let nProductos: number;

    nProductos = factura.productos.length;

    expect(nProductos).toBe(nProductosexpected);
  });

  test("Agregar poductos a la lista de productos, se van a agregar [4] productos a la lista uno de los productos repetido [Pan] con otra cantidad [5],usando el metodo #agregarProducto y se va a verificar la cantidad del producoto haya cambiado a [15]", () => {
    const p1 = new Producto("", "Leche", 2, 2.5);
    const p2 = new Producto("", "Pan", 10, 0.15);
    const p3 = new Producto("", "Queso", 2, 7.5);
    const p4 = new Producto("", "Pan", 5, 0.15);

    const productos: Producto[] = []; // [p1,p2,p3]
    const factura = new Factura(productos);

    factura.agregarProducto(p1);
    factura.agregarProducto(p2);
    factura.agregarProducto(p3);
    factura.agregarProducto(p4);

    const cantidadPanExpected = 15;

    let cantidadPan: number;

    cantidadPan = factura.productos[1].cantidad;

    expect(cantidadPan).toBe(cantidadPanExpected);
  });
});
