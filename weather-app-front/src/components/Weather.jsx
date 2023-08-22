import './weather.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Weather(){

    const [name,setName]=useState("")
    const [open,setOpen]=useState(true)
    const [data,setData]=useState()

    useEffect(()=>{
        console.log("data", data)
    },[data])

    function submitFunc(){
        if(name==""){
            alert("You need to enter a place in the input")
        }else{
            axios.post("http://localhost:5000/weather/fetchweather", {place: name})
            .then((dataFromFetch)=>{
                console.log(dataFromFetch,"datafromfetch")
                if (dataFromFetch.data.hasOwnProperty('error')) {
                    alert("Can't find the name of such a place")
                } else {
                    setData(dataFromFetch.data)
                }
                   
            })
            .catch((err)=>{
            if(err.message=="Network Error"){
                alert("There is network error. please try again later.")
            }else{
                alert("Can't found this city name")
            }
            })
        }
        }

    return(
        <div id="weather-container" >
            <div id="weather-leftside">
                <div id="leftsideup-bigtextplace">Use our weather app<br></br> to see weather<br></br> around the word</div>
                <div id="leftsidedown-inputplace">
                    <div id="citynametype">City name</div>
                    <div id="input-container">
                        <input id="input1" onChange={(e)=>setName(e.target.value)}></input>
                        <button id="check-btn" onClick={()=>submitFunc()}>check</button>
                    </div>
                </div>
            </div>
            {
              data&& open&&
              <div id="weather-rightside">
                <div id="weather-rightside-up">
                    <div id="city">{data.location.name}</div>
                    <div id="country">{data.location.country}</div>
                </div>
                <div id="weather-rightside-middle">{data.current.temp_c}°</div>
                <div id="weather-rightside-bottom">
                    <div id="precipitation-box">
                      <div className="tittle">Precipitation</div>
                      <div className='small-data'>0 mm</div>
                    </div>
                    <div id="humidity-box">
                      <div className="tittle">Humidity</div>
                      <div className='small-data'>{data.current.humidity}%</div>
                    </div>
                    <div id="wind-box">
                      <div className="tittle">Wind</div>
                      <div className='small-data'>{data.current.wind_kph} km/hour</div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
export default Weather;