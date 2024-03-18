import React from 'react'
import { useState } from 'react'
import "./App.css"

function App() {

let [city,setCity] = useState("")

let [result, setResult] = useState("")

function changeHandler(event){
  setCity(event.target.value)
}

async function submitHandler(event){
  event.preventDefault()
  let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
  let resTemp = await res.json()
  console.log(resTemp.main.temp)
  let kelvin = resTemp.main.temp
  let celsius = kelvin - 273.15
  setResult("Temparature at " + city + "\n" + Math.round(celsius)+ "°C")
  setCity("")

}

  return (
    <div>
      <center>
        <div className='card'>
            <div className='card-body'>
              <h2 className='card-title'>Weather App</h2>
              <form onSubmit={submitHandler}>
                <input type='text' name='city' value={city} onChange={changeHandler}/>
                <br/><br/>
                <input type='submit' value="Get Temparature" />
                <h2>{result}</h2>
              </form>
            </div>
        </div>
      </center>
    </div>
  )
}

export default App