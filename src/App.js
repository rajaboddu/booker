import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Buzz from "./Buzz";
import { BuzzIcon, HomeIcon } from "./components/Icons";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buzz" component={Buzz} />
      </Switch>
      <div className="bg-gray-800 flex justify-evenly space-x-8 pt-2">
        <div className="text-white">
          <Link
            className=" flex flex-col items-center justify-center
           focus:text-red-600"
            to="/"
          >
            <HomeIcon />
            <p>Home</p>
          </Link>
        </div>
        <div className="text-white">
          <Link
            className=" flex flex-col items-center justify-center
             focus:text-red-600"
            to="/buzz"
          >
            <BuzzIcon />
            <p>Buzz</p>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
