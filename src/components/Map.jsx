import React, { Component } from "react";
import country from "world-map-country-shapes";

class Map extends Component {
  render() {
    // const { selectedCountries } = this.state;
    const mapCountries = country.map(country => (
      <path
        key={country.id}
        d={country.shape}
        style={{
          fill: this.props.country === country.id ? "tomato" : "#eee",
          cursor: "pointer",
          stroke: "#ccc"
        }}
        onClick={() => this.props.selected(country.id)}
      />
    ));
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="400"
        width="800"
        viewBox="0 0 2000 1001"
      >
        {mapCountries}
      </svg>
    );
  }
}

export default Map;
