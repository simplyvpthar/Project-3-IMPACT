import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/home';
import Charity from './pages/charity';
import Dashboard from './pages/dashboard';
import Peerfunding from './pages/peerfunding';
import "./App.css";

class App extends Component {
  state = {
    serverResponse: ""
  };

  componentDidMount(){
    axios.get("/api/testytesterson")
      .then(response => {
        this.setState({ serverResponse: response.data.stuff })
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/charity" component={Charity} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/peerfunding" component={Peerfunding} />
          
          
        </Switch>
        {/* example from server */}
       
      </Router>
    );
  }
}

export default App;
