"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2>Danh sach User</h2>
      {data?.map((item: any) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
