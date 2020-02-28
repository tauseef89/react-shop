import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BlogContextProvider from "./contexts/BlogContext";

import Header from "./components/Header";
import BlogList from "./components/BlogList";
import NewBlog from "./components/NewBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <BlogContextProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={BlogList} />
            <Route path="/add-blog" component={NewBlog} />
          </Switch>
        </BlogContextProvider>
      </Router>
    </div>
  );
}

export default App;
