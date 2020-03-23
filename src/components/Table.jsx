import React from "react";
import useStats from "../utils/useStats";
import TableDetail from "./TableDetails";

export default function Table({ co }) {
  const { stats: detail, loading, error } = useStats(
    `https://covid19.mathdro.id/api/countries/${co}/deaths`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error..</p>;
  else {
    const det = detail.map((item, i) => {
      return (
        <TableDetail
          k={i}
          state={item.provinceState}
          active={item.active}
          confirmed={item.confirmed}
          death={item.death}
          recovered={item.recovered}
          country={item.countryRegion}
        />
      );
    });
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Province/State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>{det}</tbody>
        </table>
      </div>
    );
  }
}
