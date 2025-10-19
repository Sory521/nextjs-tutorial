
export default async function ProductReview({ params }:
    Readonly<{
        params: {
            productId: string;
            reviewId: string;
        }
    }>) {
  const { productId, reviewId } = params;
  return <h1>Review {reviewId} for product {productId}</h1>;
}