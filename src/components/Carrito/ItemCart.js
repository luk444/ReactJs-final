import React from 'react'
import { useCartContext } from './CartContext'

function ItemCart({ product }) {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemcart'>
            <img src={product.img} alt={product.title} />
            <div className='itemCart'>
                <p> {product.title} </p> {/* Product */}
                {/* <p> {product.stock} </p> */}
                <p>Precio Unitario: ${product.price} </p> {/* Precio */}
                <p>Subtotal: $ {(product.stock) * (product.price)} </p> {/* sUBTOTAL */}
                <button className='btn btn-danger' onClick={() => removeProduct(product.id)}>Eliminar</button>

            </div>
        </div>
    )
}

export default ItemCart