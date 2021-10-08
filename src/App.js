import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Buzz from "./Buzz";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buzz" component={Buzz} />
      </Switch>
        <div>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/buzz">Buzz</Link>
          </p>
        </div>
    </Router>
  );
}

export default App;
