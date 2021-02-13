interface IProducto {
    idProducto:number,
    idImagen:number,
    idCategoria:number
    nombre:string
    nombreCategoria:string,
    imagen:string,
    descripcion:string,
    color:string,
    talle:string,
    precio:number
}

interface IItem {
   producto:IProducto
   precio
}