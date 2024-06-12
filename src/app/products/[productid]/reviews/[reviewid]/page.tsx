import { notFound } from 'next/navigation';

// Utility function to generate a random integer between 0 and the given count (exclusive)
function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

interface PageProps {
  params: {
    productid: string;
    reviewid: string;
  };
}
//http://localhost:3000/products/1/reviews/2
const Page = ({ params }: PageProps) => {
  // Generate a random integer between 0 and 1
  const random = getRandomInt(2);

  // Simulate a random error
  if (random === 1) {
    throw new Error("Error loading review");
  }

  // Trigger a 404 page if reviewid is greater than 1000
  if (parseInt(params.reviewid,10) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>Review {params.reviewid} for product {params.productid}</h1>
    </div>
  );
};

export default Page;
