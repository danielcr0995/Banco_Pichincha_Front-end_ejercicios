class Producto {
  constructor(
    public cod: string = "",
    public nombre: string,
    public cantidad: number = 1,
    public precio: number
  ) {}

  // calcularImp(precio:number, cantidad:number):number

  calcularImp(): number {
    return this.precio * this.cantidad * 0.12;
  }
  calcSutotalProducto(): number {
    return this.precio * this.cantidad;
  }
}

export { Producto };
