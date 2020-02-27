import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductContextProvider from "./contexts/ProductContext";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import NewProductForm from "./components/NewProductForm";

function App() {
  return (
    <div className="App">
      <Router>
        <ProductContextProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/add-product" component={NewProductForm} />
          </Switch>
        </ProductContextProvider>
      </Router>
    </div>
  );
}

export default App;
