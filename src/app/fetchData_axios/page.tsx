import axios from "axios";
import React from "react";

async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return res.data;
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      {data?.map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
