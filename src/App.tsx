import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Customer from './components/Customer'
import Product from './components/Product'

function App() {

  return (
    <Router>
      <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
          <img src='https://static.wikia.nocookie.net/wattpad/images/c/c4/Wattpad_logo_%28Cut%29.png'
          alt='' className='logo'/>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
        <hr/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/customer' element={<Customer />}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </div>
    </Router>
   
  )
}

export default App
