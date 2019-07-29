import React, { Component } from 'react';
import axios from 'axios';

class SoftwareForm extends Component {
    constructor(props) {
        super(props);
    
        this.addFramework = this.addFramework.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          description: ''
        }
      }
    
      addFramework(e) {
        this.setState({
          description: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const framework = {
          description: this.state.description
        }
    
        console.log(framework);
    
        axios.post('http://localhost:5000/results/add', framework)
          .then(res => console.log(res.data));
    
        this.setState({
            description: ''
        })
      }
    
      render() {
        return (
          <div>
            <h3>Add new framework language</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Language/Framework: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.addFramework}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
}

export default SoftwareForm;