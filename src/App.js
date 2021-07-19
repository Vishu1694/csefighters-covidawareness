// Dependencies
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';

// Components
import Navs from './Screens/Navbar'
import { Nav } from 'react-bootstrap';
import Homepage from './Screens/Homepage'
import Footer from './Screens/Footer'

function App() {
  return (
    <div className="App">
      <Navs />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
