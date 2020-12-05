import React, { Fragment } from 'react';
import Product from './Product';

const Carrito = (props) => {

    const { carrito, setAddProduct } = props;

    return (
        <Fragment>
            <h2>Carrito de compras</h2>

            {
                carrito.length === 0 ? <p>El carrito esta vacio 😱</p> : carrito.map(product => (
                    <Product key={product.id} product={product} carrito={carrito} setAddProduct={setAddProduct}/>
                ))
            }
        </Fragment>
    );
}

export default Carrito;