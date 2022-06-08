import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ProductDetail from './components/pages/ProductDetail';
import CartPage from './components/pages/CartPage';
import Checkout from './components/pages/Checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Product />}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
