"use client";

import React, { useEffect, useState } from "react";

export default function page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/apiProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>List Products</h2>
      {products?.map((item: any) => (
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
