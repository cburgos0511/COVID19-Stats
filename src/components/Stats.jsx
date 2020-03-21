import React from "react";
import useStats from "../utils/useStats";

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  if (stats.error) {
    return <p>Country was not found in Database</p>;
  } else {
    return (
      <>
        <div>
          <div id="last-update">
            <p>
              Last updated: {new Date(stats.lastUpdate).toLocaleDateString()}
            </p>
          </div>
          <div id="flex">
            <div className="statwrap">
              <h2>Confirmed</h2>
              <span>{stats.confirmed.value.toLocaleString()}</span>
            </div>
            <div className="statwrap">
              <h2>Recovered</h2>
              <span>{stats.recovered.value.toLocaleString()}</span>
            </div>
            <div className="statwrap">
              <h2>Deaths</h2>
              <span>{stats.deaths.value.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
