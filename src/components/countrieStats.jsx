import React, { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";
import Table from "./Table";
import Map from "./Map";

export default function CountriesStats() {
  const [co, setCO] = useState("US");
  const { stats: countries, loading, error } = useStats(
    `https://covid19.mathdro.id/api/countries`
  );

  const selectedCountry = id => {
    setCO(id);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error..</p>;
  if (countries.error) {
    return <p>Country was not found in Database</p>;
  } else {
    // console.log(countries.countries.map(a => a.iso2));
    // const title = countries.countries.map(a => a.iso2);
    // .find(key => countries.countries.map(a => a.iso2)[key] === co);

    return (
      <div>
        <div className="map">
          <Map selected={selectedCountry} country={co} />
        </div>
        <div className="wrapper">
          <div>
            <h2 className="title">{co} Stats</h2>
            <div className="content">
              <Stats url={`https://covid19.mathdro.id/api/countries/${co}`} />
            </div>
            <div className="select">
              <p>Select a country:</p>
              <select onChange={e => setCO(e.target.value)} value={co}>
                {Object.entries(countries.countries).map(([country, code]) => {
                  return (

                    <option key={code.name} value={code.iso2}>

                      {code.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <Table co={co} />
      </div>
    );
  }
}
