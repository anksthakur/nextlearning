// jo dynamic route honge uhnke ley by default ek page bna deya
import React from 'react'

const page = ({params}:{params:{productid:string}}) => {
  return (
    <div>
      <h1>Deatils about Product {params.productid}</h1>
    </div>
  )
}

export default page
