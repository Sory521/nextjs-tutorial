
export default async function ProductDetails({params}: Readonly<{params: { productId: string }}>) {
  const { productId } = params;
  return <h1>Details about product {productId}</h1>;
}