const waitFor = (sec:number)=>
    new Promise((res,rej)=> setTimeout(rej , sec*1000));//(res , sec*1000));
const page = async() => {
    await waitFor(3);
  return (
    <div>
        
    <h1 className="text-color-red-500">User Page</h1>
    </div>
  )
}

export default page
// localhost:3000/dashboard/user