import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import About from './pages/About'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={About} />
          <Route path='/singlepage/:id' component={SinglePage} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
