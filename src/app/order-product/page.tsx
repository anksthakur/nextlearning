'use client'
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing Your Order");
        router.push('/');
    }
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </div>
  )
}

export default Page;
