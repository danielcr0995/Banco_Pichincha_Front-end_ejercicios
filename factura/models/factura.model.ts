import { newUID } from "../utils/functions/random.functions";
import { Producto } from "../models/producto.models";

class Factura {
  constructor(public productos: Producto[]) {}

  agregarProducto(producto: Producto): void {
    let productoFacturado: Producto | undefined = this.productos.find(
      (prod) => {
        if (prod.nombre === producto.nombre) {
          return prod;
        }
      }
    );
    if (productoFacturado === undefined) {
      // const newUID = ():string=> Math.random().toString(36).slice(2)
      producto.cod = newUID();
      this.productos.push(producto);
      // console.log(`Agregar ${producto.nombre} - Cantidad: ${producto.cantidad}`)
    } else {
      productoFacturado.cantidad += producto.cantidad;
    }
    console.log(`Agregar ${producto.nombre} - Cantidad: ${producto.cantidad}`);
  }

  calcTotales(): { subtotal: number; impuestos: number; total: number } {
    let subtotal = 0;
    let impuestos = 0;
    let total = 0;

    this.productos.forEach((producto) => {
      impuestos += producto.calcularImp();
      subtotal += producto.calcSutotalProducto();
    });
    total += impuestos + subtotal;
    return { subtotal: subtotal, impuestos: impuestos, total: total };
  }

  imprimirFactura(): void {
    const { subtotal, impuestos, total } = this.calcTotales();
    console.log("\n---------------");
    console.log(" FACTURA ");
    console.log("--------------- \n");
    this.productos.forEach((producto) => {
      console.log(
        `${producto.cod} ${producto.nombre} ${
          producto.cantidad
        }  ${producto.calcSutotalProducto()}`
      );
    });
    console.log("\n--------------- ");
    console.log("Subtotal:", subtotal);
    console.log("IVA:", impuestos);
    console.log("Total:", total);
  }
}

export { Factura };
