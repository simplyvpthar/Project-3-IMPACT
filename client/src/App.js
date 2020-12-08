import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Charity from './pages/charity';
import Home from './pages/home';
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
          <Route exact path="/home-react" component={Home} />
          <Route exact path="/charity-react" component={Charity} />
        </Switch>
        {/* example from server */}
        <h2>This is from the server: {this.state.serverResponse}</h2>
      </Router>
    );
  }
}

export default App;
