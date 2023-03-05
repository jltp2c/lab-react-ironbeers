import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner';

function RandomBeers() {
  const [randomBeer, setRandomBeer] = useState(null)

  const getRandomBeer = async () =>{
     const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      console.log(res.data)
      setRandomBeer(res.data)
  }

  useEffect( () => {
   try {
     getRandomBeer()
   } catch (error) {
     console.log(error)
   }
  },[])

  if(!randomBeer){
    return <Spinner/>
  }
  return (
    <div className='containerBeer'>
      <img src={randomBeer.image_url} alt={randomBeer.name} width={90}/>
      <div className="boxContainer">
          <h1>{randomBeer.name}</h1>
        <h2>{randomBeer.tagline} <span><b>{randomBeer.first_brewed}</b></span></h2>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  )
}

export default RandomBeers