import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import About from './pages/About'
import Produit from "./pages/Produit"
import Adhesion from './pages/Adhesion'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/produit' element={<Produit/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/adhesion' element={<Adhesion/>} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
