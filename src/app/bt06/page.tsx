"use client";

import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/apiUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>List Users</h2>
      {users?.map((item: any) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.email}</li>
          <li>
            <p>{item.address.street}</p>
            <p>{item.address.suite}</p>
            <p>{item.address.city}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}
