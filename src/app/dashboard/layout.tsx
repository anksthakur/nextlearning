

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <nav>
        <h1>Navbar</h1>
      </nav>
      <div>{children}</div>
    </div>
  )
}

export default layout
