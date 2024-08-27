"use client";

import axios from "axios";
import React from "react";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await axios.get(url);

  return res.data;
};

export default function page() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) {
    return <div>Lấy dữ liệu thất bại</div>;
  }
  if (!data) {
    return <div>data loading ...</div>;
  }
  return (
    <div>
      Sử dụng SWR
      {data.map((item: any) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
