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
      <Route  exact path="/ShoppingInternProject" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/profile" element={ <Profile/>}/>
      <Route exact path="/product" element={ <Product/>}/>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
