import React from "react";

export default function TableDetail({
  death,
  confirmed,
  active,
  state,
  recovered,
  country
}) {
  const name = state === null ? country : state;
  return (
    <>
      <td>{name}</td>
      <td>{confirmed}</td>
      <td>{recovered}</td>
      <td>{death}</td>
      <td>{active}</td>
    </>
  );
}
