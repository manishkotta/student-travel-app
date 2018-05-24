import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getCountriesAndThreatLevels } from './redux/App.redux';

import { GET_COUNTIRES_AND_THREAT_LEVELS_URL } from './constants/API';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: {},
    }
    this.handleCountryDrpChange = this.handleCountryDrpChange.bind(this);
    this.handleWishlistClick = this.handleWishlistClick.bind(this);
  }

  componentDidMount() {
    this.props.getCountriesAndThreatLevels(GET_COUNTIRES_AND_THREAT_LEVELS_URL);
  }

  bindCountriesToDropDown() {
    const { countries } = this.props;
    return countries.map(s => {
      return (<option key={"c" + s.id} value={s.id}>{s.name}</option>)
    })
  }

  handleCountryDrpChange(e) {
    const { countries } = this.props;
    var selectedCountries = countries.filter(s => {
      if (s.id == e.target.value)
        return s;
    });
    if (selectedCountries.length > 0) {
      this.setState({ selectedCountry: selectedCountries[0] })
    }
  }

  handleWishlistClick(s) {
    console.log(s);
  }

  countryThreatLevel() {
    var selectedCountry = this.state.selectedCountry;

    if (selectedCountry.threatLevel == 1 || selectedCountry.threatLevel == 2) {
      return (<div><button className="btn btn-primary" type="button" onClick={(e) => { this.handleWishlistClick(selectedCountry,e) }}>Add to WishList</button></div>)
    }
    else {
      return (<span className="danger">{selectedCountry.threatText}</span>)
    }

  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <section>
          <div className="container">
            <div className="row">
              <form>
                <div className="form-group">
                  <label htmlFor="countryDrpDown" className="">Country</label>
                  <select ref="selectedCountry" className="form-control" id="countryDrpDown" onChange={(e) => this.handleCountryDrpChange(e)}>
                    <option value="0">--Select Country--</option>
                    {this.bindCountriesToDropDown()}
                  </select>
                </div>
                <div className="form-group">
                  <label className="mr-2">Selected Country: </label>
                  <label className="">{this.state.selectedCountry.name}</label>
                </div>
                <div className="form-group">
                   {this.countryThreatLevel()}
                </div>
              </form>
              <table>

              </table>
            </div>
          </div>
        </section>
        <footer>
        </footer>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    getCountriesAndThreatLevels: (url) => dispatch(getCountriesAndThreatLevels(url)),
  }
}

const mapStateToProps = state => {
  const { studentReducer: { countries, userWishListCountries } } = state;
  return {
    countries,
    userWishListCountries
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
