import Link from 'next/link'
import React from 'react'

const page = () => {
  const productid = 100;
  return (
    <div>
      <h1>Products Page</h1>
      <h2><Link href="/products/1">Product 1</Link></h2>
      <h2><Link href="/products/2">Product 2</Link></h2>
      <h2><Link href="/products/3" replace>Product 3</Link></h2>
      <h2><Link href={`/products/${productid}`}>Product {productid}</Link></h2>
       <br></br>
      <Link href="/">Home</Link>
    </div>
  )
}

export default page
