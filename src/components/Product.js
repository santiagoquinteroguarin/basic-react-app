import React from 'react';

const Product = (props) => {

    const { products, product, carrito, setAddProduct } = props;
    const { id, name, value, emoji } = product;

    const selectProduct = (id) => {
        const product = products.filter(product => product.id === id);
        setAddProduct(
            [...carrito, ...product]
        )
    };

    const deletedProduct = (id) => {
        const products = carrito.filter(product => product.id !== id);
        setAddProduct(products);
    }

    return ( 
        <section className="productList">
            <h2>{name} {emoji}</h2>
            <p>Precio: <span>${value}</span></p>

            {
                products
                ? 
                    (
                        <button 
                            className="button"
                            type="button"
                            onClick={() => selectProduct(id)}
                        >Comprar</button>
                    )
                : 
                    (
                        <button 
                            className="button"
                            type="button"
                            onClick={() => deletedProduct(id)}
                        >Eliminar</button>
                    )
            }
            
        </section>
    );
}

export default Product;