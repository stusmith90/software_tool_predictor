// client/src/App.js
import React, { Component } from "react";
import "./sass/styles.scss";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SoftwareForm from "./Components/SoftwareForm";

class App extends Component {
  render() {
    
    return (
      <div className="grid-container">
        <div class="grid-item">Software Prediction Tool</div>
        <Router>
      <div className="container">
      <br/>
      <Route path="/" exact component={SoftwareForm} />
      </div>
    </Router>
            </div>
            );
          }
        }
        
        export default App;