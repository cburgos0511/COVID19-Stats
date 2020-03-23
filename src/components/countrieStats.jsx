import React, { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";
import Table from "./Table";

export default function CountriesStats() {
  const [co, setCO] = useState("US");
  const { stats: countries, loading, error } = useStats(
    `https://covid19.mathdro.id/api/countries`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error..</p>;
  if (countries.error) {
    return <p>Country was not found in Database</p>;
  } else {
    const title = Object.keys(countries.countries).find(
      key => countries.countries[key] === co
    );

    return (
      <div>
        <div className="wrapper">
          <div>
            <h2 className="title">{title} Stats</h2>
            <div className="content">
              <Stats url={`https://covid19.mathdro.id/api/countries/${co}`} />
            </div>
            <div className="select">
              <p>Select a country:</p>
              <select onChange={e => setCO(e.target.value)} value={co}>
                {Object.entries(countries.countries).map(([country, code]) => {
                  return (
                    <option key={country} value={code}>
                      {country}
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
