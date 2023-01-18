import { Routes,Route  } from 'react-router-dom';
import About from './About';
import './App.css';
import Nav from './components/Nav';
import Product from './components/Product';
import Footer from './Footer';
import Home from './Home';
import Profile from './components/Profile';


function App() {
  return (
   <div>
    
    <Nav/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route   path="/profile" element={ <Profile/>}/>
      <Route   path="/product" element={ <Product/>}/>
    </Routes>

  
    <Footer/>
   </div>
  );
}

export default App;
