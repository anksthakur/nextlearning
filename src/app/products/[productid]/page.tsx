// jo dynamic route honge uhnke ley by default ek page bna deya

// const page = ({params}:{params:{productid:string}}) => {
//   return (
//     <div>
//       <h1>Deatils about Product {params.productid}</h1>
//     </div>
//   )
// }

// export default page

// dynamic metadata

type Props = {
  params: {
    productid : string
  }
}

import { Metadata } from "next";
export const generateMetadata = async({params}:Props): Promise <Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(()=> {
      resolve(`iPhone ${params.productid} `)
    })
  })
  return {
    title: `Product ${title}`
  }
}

export default function ProductDetails ({params}:Props){
return <h1> Details about {params.productid}</h1>
}