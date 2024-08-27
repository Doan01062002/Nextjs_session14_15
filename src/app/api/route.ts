// Tạo ra các phương thức

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users");

  return NextResponse.json(data.data);
}
