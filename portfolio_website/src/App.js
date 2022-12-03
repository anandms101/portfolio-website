import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/homePage";
import Footer from "./components/footer";
import About from "./components/about";
import HomeSecond from "./components/homePageSecondHalf";

function App() {
  let ComponentToBeRendered;

  switch (window.location.pathname) {
    case "/about":
      ComponentToBeRendered = About;
      break;
    // case "/resume":
    //   ComponentToBeRendered = <About />;
    //   break;
    // case "/projects":
    //   ComponentToBeRendered = <About />;
    //   break;
    // case "/contactUs":
    //   ComponentToBeRendered = <About />;
    //   break;
    default:
      ComponentToBeRendered = Home;
      break;
  }
  console.error(ComponentToBeRendered == Home);
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <Home />
      <HomeSecond /> */}
        <ComponentToBeRendered />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
