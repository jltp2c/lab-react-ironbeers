import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Spinner from '../../components/Spinner';


function Beer() {

  const {beerId} = useParams()
  const [oneBeer, setOneBeer] = useState(null)


  const getOneBeer = async () =>{
     const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      console.log(res.data)
      setOneBeer(res.data)
  }

  useEffect( () => {
   try {
     getOneBeer()
   } catch (error) {
     console.log(error)
   }
  },[])

  if(!oneBeer){
    return <Spinner/>
  }

  return (
    <div className='containerBeer'>
      <img src={oneBeer.image_url} alt={oneBeer.name} width={90}/>
      <div className="boxContainer">
        <h1>{oneBeer.name}</h1>
        <h2>{oneBeer.tagline} <span><b>{oneBeer.first_brewed}</b></span></h2>
        <p>{oneBeer.description}</p>
        <p>{oneBeer.contributed_by}</p>
      </div>
    </div>
  )
}

export default Beer;