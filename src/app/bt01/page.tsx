import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <div>
      <h2>List Post</h2>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
