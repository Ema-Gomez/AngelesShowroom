export interface iProductos{
    idProducto:number,
    idImagen:number,
    idCategorias:number,
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
    idProducto:string,
    idCategorias:string,
    nombre:string,
    descripcion:string,
    imagen:string,
    color:string,
    talle:string,
    precio:number,
    cantidad:number,
    subtotal:number
}

