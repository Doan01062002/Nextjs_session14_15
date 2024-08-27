import axios from "axios";

export default async function ErrorHandlingPage() {
  try {
    const { data } = await axios.get("https://example.com/invalid-endpoint");
    return (
      <div>
        <h1>Data Fetched Successfully</h1>
        <h3>{JSON.stringify(data, null, 2)}</h3>
      </div>
    );
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message =
      status === 404
        ? "The requested resource was not found."
        : status === 500
        ? "Internal server error."
        : "Unexpected error occurred.";
    return (
      <div>
        <h1>Error: {status}</h1>
        <h2>{message}</h2>
      </div>
    );
  }
}
