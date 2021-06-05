export interface iProductos{
    idProducto:number,
    idImagen:number,
    idCategoria:number,
    nombre:string,
    nombreCategoria:string,
    imagen:string,
    descripcion:string,
    color:string,
    talle:string,
    precio:number,
    cantidad:number;
}

export interface iItem{
    idProducto:number,
    nombre:string,
    imagen:string,
    descripcion:string,
    color:string,
    talle:string,
    precio:number,
    cantidad:number,
    subtotal:number
}

