import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            MarketManager
          </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
