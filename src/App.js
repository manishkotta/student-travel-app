import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {


  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <section>
          <div className="container">
            <div className="row">
              <div className="form-group">
                <label htmlFor="countryDrpDown">Country</label>
                <select className="form-control" id="countryDrpDown">

                </select>
              </div>
            </div>
          </div>
        </section>
        <footer>
        </footer>
      </div>
    );
  }
}



mapDispatchToProps = dispatch => {
  return {
     
  }
}

export default connect()(App);
