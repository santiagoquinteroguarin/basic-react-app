import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Carrito from './components/Carrito';
import './app.css';

function App() {

  const dateYear = new Date().getFullYear();

  // Listado de productos

  const [ products ]= useState([
    { id: 1, fruit: 'apple', value: 2, emoji: '🍎'},
    { id: 2, fruit: 'pear', value: 1, emoji: '🍐'},
    { id: 3, fruit: 'coconut', value: 4, emoji: '🥥'},
    { id: 4, fruit: 'banana', value: 2, emoji: '🍌'},
    { id: 5, fruit: 'orange', value: 5, emoji: '🍊'},
  ]);

  const [carrito, setAddProduct] = useState([]);

  return (
    <Fragment>
      <Header titleHeader="Tiendita 🛒"/>

      <section className="content">
        <div className="content__products-list item">
          <h2>Lista De Productos</h2>

          {products.map(product => (
            <Product key={product.id} product={product} carrito={carrito} setAddProduct={setAddProduct} products={products}/>
          ))}
        </div>
        <div className="content__carrito item">
          <Carrito carrito={carrito} setAddProduct={setAddProduct}/>
        </div>
      </section>

      <Footer dateYear={dateYear}/>
    </Fragment>
  );
}

export default App;
