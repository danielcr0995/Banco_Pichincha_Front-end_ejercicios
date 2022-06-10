// console.log("hola")



class Producto {
    constructor (public cod:string="", public nombre: string, public cantidad:number, public precio:number){}

    calcularImp():number{
        return this.precio*this.cantidad*0.12;
    }
    calcSutotalProducto():number{
        return this.precio*this.cantidad
    }
}

class Factura{
    constructor(public productos : Producto[]){}
    
    agregarProducto(producto:Producto):void{
        let productoFacturado:any = this.productos.find(prod=>{ 
            if(prod.nombre === producto.nombre){
                return prod;   
            }
        })
        if(productoFacturado === undefined){
            const newUID = ():string=> Math.random().toString(36).slice(2)
            producto.cod=newUID();
            this.productos.push(producto)
            // console.log(`Agregar ${producto.nombre} - Cantidad: ${producto.cantidad}`)
        }else{
            productoFacturado.cantidad+=producto.cantidad;

        } 
        console.log(`Agregar ${producto.nombre} - Cantidad: ${producto.cantidad}`)

    }

    calcTotales():{subtotal:number, impuestos:number, total:number}{
        let subtotal=0
        let impuestos =0
        let total=0;

        this.productos.forEach(producto=>{
            impuestos+=producto.calcularImp();
            subtotal += producto.calcSutotalProducto();
            
        })
        total += impuestos+subtotal;
        return {subtotal:subtotal, impuestos:impuestos, total:total}
    }

    imprimirFactura():void{

        const {subtotal, impuestos, total} = this.calcTotales()
        console.log("\n---------------")
        console.log(" FACTURA ")
        console.log("--------------- \n")
        this.productos.forEach(producto=>{
            console.log(`${producto.cod} ${producto.nombre} ${producto.cantidad}  ${producto.calcSutotalProducto()}`)
        })
        console.log("\n--------------- ")
        console.log("Subtotal:", subtotal)
        console.log("IVA:", impuestos)
        console.log("Total:", total)
    }
}

const p1 = new Producto("","Leche", 2 , 2.5)
const p2 = new Producto("","Pan", 10 , 0.15)
const p3 = new Producto("","Queso", 2 , 7.5)
const p4 = new Producto("","Pan", 5 , 0.15)

const productos:Producto[] =[]// [p1,p2,p3]
const factura = new Factura(productos)

factura.agregarProducto(p1)
factura.agregarProducto(p2)
factura.agregarProducto(p3)
factura.agregarProducto(p4)

factura.imprimirFactura()

