"use client";

import { useState } from "react";
import axios from "axios";

export default function ProductFilter() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filterProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    const filteredProducts = data.filter(
      (product: any) =>
        product.price >= (minPrice || 0) &&
        product.price <= (maxPrice || Infinity)
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={filterProducts}>Filter</button>
      </div>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width="50" />
            <p>
              {product.title} - ${product.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
