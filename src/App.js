import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import BlogList from "./components/BlogList";
import NewBlog from "./components/NewBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/add-blog" component={NewBlog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
