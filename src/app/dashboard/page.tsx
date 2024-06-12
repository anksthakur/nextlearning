
import React from 'react'

const page = () => {
    async function Hello(params:any){
        // is particular part ko server pe render krdo
        // uhske ley next.config.mjs file m jana hai-  const nextConfig = {experimental : { serverActions : true }};
        'use server'
        console.log(params)
    }
    //console.log("show error") // ye server pe aaye kyuki ye server component hai -- terminal m 
    // isko client side show karwane ke ley "use client" top pe type krna pdega
  return (
    <div>
    <form action={Hello}>
    <h1>Dashboard</h1>
    <button>Submit</button>
    </form>
    </div>
  )
}

export default page
