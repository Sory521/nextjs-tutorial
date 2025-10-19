
import { notFound } from "next/navigation";
export default async function ProductReview({ params }:
    Readonly<{
        params: {
            productId: string;
            reviewId: string;
        }
    }>) {
    const { productId, reviewId } = params;
    if (Number.parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <h1>
            Review {reviewId} for product {productId}
        </h1>
    );
}