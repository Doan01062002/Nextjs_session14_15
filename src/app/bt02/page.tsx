import React from "react";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <div>
      <h2>List Products</h2>
      {data?.map((item: any) => (
        <ul key={item.id}>
          <li>{item.title}</li>
          <li>{item.price}</li>
          <li>
            <img src={item.image} alt={item.title} />
          </li>
        </ul>
      ))}
    </div>
  );
}
