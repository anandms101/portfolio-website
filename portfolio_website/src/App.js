import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/homePage";
import Footer from "./components/footer";

function App() {
  return (
    
    <div className="App">

      <Router>
        <NavBar />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
