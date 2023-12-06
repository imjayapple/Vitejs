const App = () => {

  let data = "boy";

  return (
    <div>
      {data==="boy"?<h1>Dog</h1>:<h1>Cat</h1>}
    </div>
  )
}

export default App