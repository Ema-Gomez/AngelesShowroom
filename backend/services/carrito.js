const express = require('express');
const {crearCompra, actualizarCompra, eliminarCompra} = require('../models/compra');
const {crearCompraProd, actualizarCompraProd, eliminarCompraProd} = require('../models/compra_producto');
const { traerUsuario } = require('../models/usuarios');


const agregarProducto = (producto) => {
    req.session.carrito.push(producto);
    console.log(req.session.carrito);
}

const comprar = async ({id:idProducto, precio, cantidad} = {}) =>{
    const idUsuario = req.token;
    const subtotal = precio * cantidad;
    const {instertId : idCompra } = await crearCompra({idUsuario, total});
    const {insertId : idCompraProducto} = await crearCompraProd({idCompra, idProducto, cantidad, subtotal});
    return idCompraProducto;
}

module.exports = {comprar, agregarProducto};