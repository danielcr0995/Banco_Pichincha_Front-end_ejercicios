// console.log("hola")
import { Factura } from "./models/factura.model";
import { Producto } from "./models/producto.models";

// calcularImp(5,0.12)

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

factura.imprimirFactura();
