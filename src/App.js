import logo from './logo.svg';
import './App.css';
import WishList from './pages/WishList';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header1 from './components/Header1';
import { Route, Routes } from 'react-router-dom';
import Footer1 from './components/Footer1';

function App() {
  return (
   <div>
    <Header1/>
    
    <Routes>
      <Route path='/' element={< Home />}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer1 />
   </div>
  );
}

export default App;
