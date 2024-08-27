// ProductList.tsx
export async function ProductList() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
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
  );
}
