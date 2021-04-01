import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import About from "./components/About";
import Details from "./components/Details";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/Store";
console.log(store)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {/* navbar */}
          <Navbar />
          {/* end of navbar */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={Details} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
