import Navigation from './Components/navigation.js'
import HomePage from './Components/Pages/HomePage.js'
import './App.css';
import Product from './Components/Product/Product.js';
import Footer from './Components/Footer/Footer.js';
import ProductDetails from './Components/ProductDetrails/ProductDetails.js';
import Cart from './Components/Cart/Cart.js';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/Auth/LoginForm.js';
import RegisterForm from './Components/Auth/RegisterForm.js';

function App() {
  return (
  
    <div>
  <div>
  <Navigation />
  </div>
     
      <Routes>
      <Route path='/login' element={<LoginForm />}></Route>
      <Route path='/register' element={<RegisterForm />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
        <Route path='/search'  element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      <div>
      <Footer />
      </div>
    
  
    </div>
  );
}

export default App;
