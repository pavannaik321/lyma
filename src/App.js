import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom"
import "../src/index.css"
import About from "./about/about";
import Footer from "./footer/footer";
import Home from "./Home/Home";
import Navbar from "./Home/navbar/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Help from "./help/help";
import Activate from "./activate/activate";
import Login from "./login/login";
import Buy from "./buy/Buy";
import Suplement from "./suplement/suplement";
AOS.init();





function App() {
  return (
    <>
  <div>
<Router>
    <header >
    <Navbar />
    </header>
    <Routes>
    <Route path="/" element={<Home  />}  />
    <Route path="/help" element={<Help />} />
    <Route path="/activate/" element={<Activate />} />
    <Route path="/login/" element={<Login />} />
    <Route path="/buy-link/" element={<Buy />} />
    <Route path="/suplement" element={<Suplement />} />
    
</Routes>
    <footer>
    <Footer/>
    </footer>
    </Router>
    </div>
    </> 
  );
}

export default App;
