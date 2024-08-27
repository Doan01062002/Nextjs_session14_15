import { ProductList } from "../components/ProductList";
import ProductFilter from "../components/ProductFilter";

export default function ProductPage() {
  return (
    <div>
      <h1>Product List</h1>
      <ProductFilter />
      {/* <ProductList /> */}
    </div>
  );
}
