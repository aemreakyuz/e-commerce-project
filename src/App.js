import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/productList">
          <ProductList />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
