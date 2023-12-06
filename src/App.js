import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

import Team from "./pages/Team";

import About from "./pages/About";
import ProductListPage from "./pages/ProductListPage";
import { Data } from "./assets/Data";

function App() {
  const teamMember = Data.team;

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
          <About teamMember={teamMember} />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/productList">
          <ProductListPage />
        </Route>
        <Route path="/team">
          <Team teamMember={teamMember} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
