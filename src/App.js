import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
