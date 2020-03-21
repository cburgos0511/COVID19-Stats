import React from "react";
import "./styles.css";
import Stats from "./components/Stats";
import CountriesStats from "./components/countrieStats";

export default function App() {
  return (
    <div className="App">
      <div className="what">
        <h1>COVID</h1>
      </div>

      <div className="container">
        <div className="wrapper">
          <h2 className="title">World Stats</h2>
          <div className="content">
            <Stats url="https://covid19.mathdro.id/api" />
          </div>
        </div>
        <CountriesStats />
      </div>
    </div>
  );
}
