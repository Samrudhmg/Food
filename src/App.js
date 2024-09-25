import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';


function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Navbar />
        
          <div className="container mx-auto p-4">
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/product/:barcode" element={<ProductDetails/>} />
              <Route path="/cart" element={<Cart/>} />
              </Routes>
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
