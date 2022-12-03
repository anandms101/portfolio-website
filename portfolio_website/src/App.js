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
import About from "./components/about";
import HomeSecond from "./components/homePageSecondHalf";

function App() {
  return (
    
    <div className="App">

      <Router>
        <NavBar />
        <Home />
        <HomeSecond />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
