import axios from "axios";
import React from "react";

async function getData() {
  const res = await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
  );
  return res.data;
}

export default async function page() {
  const data = await getData();

  return (
    <div>
      <h2>Weather</h2>
      <ul>
        <li>{data.elevation}</li>
        <li>{data.timezone}</li>
      </ul>
    </div>
  );
}
