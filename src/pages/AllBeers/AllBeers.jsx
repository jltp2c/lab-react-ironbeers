import React from 'react';
import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import Spinner from "../../components/Spinner";


function AllBeers() {

const [beers,setBeers] = useState(null)
const [allBeers, setAllBeers] = useState(null)

const api = "https://ih-beers-api2.herokuapp.com/beers"


const getBeers = async () =>{
  try {
   const res =  await axios.get(api)
  //  console.log(res.data)
   setBeers(res.data)
   setAllBeers(res.data)
  } catch (error) {
    console.log(error)
  }
}

const searchBar =  (beerToFind) => {
  const searching =  allBeers.filter((beer) => (beer.name.toLowerCase().includes(beerToFind.toLowerCase())))
  
  setBeers(searching)
}

const handleSubmit = (e) => {
  console.log(e.target.value)
  if(e.target.value !== ""){
    searchBar(e.target.value)
  }else{
    setBeers(allBeers)
  }
}

useEffect( () =>{
  getBeers()
},[])

if(!beers){
return <Spinner/>
}

  return (
    <ul className='list-group'>

        <div className="searchBar list-group-item input-group rounded">
          <input onChange={handleSubmit} type="text" name='searchBar'  placeholder="Search"  />
        </div>
 
      { beers && beers.map(beer=>{
        return (


          <NavLink key={beer._id} to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }}>
          <li  className="list-group-item" >
           <div className="containerItem">
              <div className="picture">
              <img src={beer.image_url} alt="{beer.name}" width={50}/>
            </div>
            <div className="descriptions" >
              <h2>{beer.name}</h2> 
              <p>{beer.tagline}</p>
              <p>Created by : {beer.contributed_by}</p>
            </div>
           </div>
          </li>
          </NavLink>


        )
      })}
      
    </ul>
  )
}

export default AllBeers