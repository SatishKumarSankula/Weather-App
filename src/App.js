import React from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard'

function App() {

  let [search,setSearch] = useState("")

  function changeHandler(event){
    setSearch(event.target.value)
  }

  let [products,productsList] = useState([])

  let YOUR_APP_ID = "6c04373a"
  let YOUR_APP_KEY = "11062341ddeace5411a00c76db64b56d"
  

  async function submitHandler(event){
    event.preventDefault()
    console.log(search)
    let res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
    let resPro = await res.json()
    productsList(resPro.hits)
    console.log(resPro.hits)
  }

  return (
    <div>
      <center>
        <h1>Food Recipe App</h1>
        <form  onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler}/>
          <br/><br/>
          <input type="submit" className='btn btn-primary' name="Search"/>
        </form>
        {products.length>1 ? <ProductCard data={products}></ProductCard> : null}
        
      </center>
    </div>
  )
}

export default App