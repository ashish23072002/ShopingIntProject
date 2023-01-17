import { Routes,Route  } from 'react-router-dom';
import About from './About';
import './App.css';
import Nav from './components/Nav';
import Product from './components/Product';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';


function App() {
  return (
   <div>
    <Nav/>
    <Routes>
      <Route   path="/home" element={<Home/>}/>
      <Route exact path="/ShoppingInternProject/#/about" element={<About/>}/>
      <Route  exact path="/ShoppingInternProject/#/profile" element={ <Profile/>}/>
      <Route  exact path="/ShoppingInternProject/#/product" element={ <Product/>}/>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
