const page = ({params}:{params:{slug:string[]}}) => {
    if(params.slug.length === 2){
        return (
            // agar route ki length 2 hai eg - localhost:3000/docs/routing/catchallsegments = Viewing docs for feature routing and concept catchallsegment
            <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
        );
        // agar route ki length 1 hai eg - localhost:3000/docs/routing = Viewing docs for feature routing
    }else if (params.slug.length === 1){
        return <h1>Viewing docs for feature {params.slug[0]}</h1>
    }
  return (    
    <div>
      <h1>Docs Home Page </h1>
    </div>
  )
}
export default page