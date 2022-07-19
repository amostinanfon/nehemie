import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from './pages/About';
import Produit from "./pages/Produit";
import Adhesion from './pages/Adhesion';
import Activation from './pages/Activation';
import Contrat from "./pages/Contrat";
import Preambule from "./pages/Preambule";
import Presentation from "./pages/Presentation";
import Responsabilite from "./pages/Responsabilite";
import Statut from "./pages/Statut";
import Type from "./pages/Type";
import Perte from "./pages/Perte";
import Confidentialite from "./pages/Confidentialite";
import Modification from "./pages/Modification";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/produit' element={<Produit/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/adhesion' element={<Adhesion/>} />
          <Route path='/activation' element={<Activation/>} />
          <Route path='/contrat' element={<Contrat/>}/>
          <Route path='/preambule' element={<Preambule/>}/>
          <Route path='/presentation' element={<Presentation/>}/>
          <Route path='/responsabilite' element={<Responsabilite/>}/>
          <Route path='/statut' element={<Statut/>}/>
          <Route path='/type' element={<Type/>}/>
          <Route path='/perte' element={<Perte/>}/>
          <Route path='/confidentialite' element={<Confidentialite/>}/>
          <Route path='/modification' element={<Modification/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
