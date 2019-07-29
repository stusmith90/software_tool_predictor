// client/src/App.js
import React, { Component } from "react";
import "./sass/styles.scss";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SoftwareForm from "./Components/SoftwareForm";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-item">Software Prediction Tool</div>
        <div className="grid-router">
        <Router>
          <Route path="/add" exact component={SoftwareForm} />
          </Router>
          </div>
          </div>
            );
          }
        }
        
export default App;