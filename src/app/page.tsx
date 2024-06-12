import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link><br></br>
      <Link href="/products">Products</Link>
    </div>
  )
}

export default page
