import React, { useState } from 'react';
import './App.css';
import MainContainer from './Components/MainContainer';
import myContext from './Context/ContexApi';



function App() {


  const [search, setSearch] = useState('')

  const [state, setState] = useState({
    city: 'Pune',
    country: 'In',
    celcuis: '',
    temp: '',
    humidity: '',
    visibility: '',
    speed:'',
  })
 


  const handleClick = async () => {
    if (search !== '') {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6cac9baaa5286e7dc8c4890172104d9d&&units=metric  
      `)
     const data = await response.json()
      setState({
        ...state, celcuis: data.main.temp,
        city: data.name, country: data.sys.country,
        humidity: data.main.humidity, visibility: data.visibility,
        speed: data.wind.speed, temp: data.main.temp
      })
    }

  }



  return (
    <myContext.Provider
      value={
        {
          state,
          setSearch,
          handleClick
        }
      }
    >
      <div className='top_Container'>
        <h1>Weather App</h1>
        <MainContainer />
      </div>
    </myContext.Provider>
  );
}

export default App;
