"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("hola")
const factura_model_1 = require("./models/factura.model");
const producto_models_1 = require("./models/producto.models");
// calcularImp(5,0.12)
const p1 = new producto_models_1.Producto("", "Leche", 2, 2.5);
const p2 = new producto_models_1.Producto("", "Pan", 10, 0.15);
const p3 = new producto_models_1.Producto("", "Queso", 2, 7.5);
const p4 = new producto_models_1.Producto("", "Pan", 5, 0.15);
const productos = []; // [p1,p2,p3]
const factura = new factura_model_1.Factura(productos);
factura.agregarProducto(p1);
factura.agregarProducto(p2);
factura.agregarProducto(p3);
factura.agregarProducto(p4);
factura.imprimirFactura();
// console.log(factura);
