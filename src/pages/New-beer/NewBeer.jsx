import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function NewBeer() {

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [brewed, setBrewed] = useState('');
  const [tips, setTips] = useState('');
  const [level, setLevel] = useState('');
  const [contributed, setContributed] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const beerToCreate = {
      name : name,
      tagline : tagline,
      description : description,
      brewed : brewed,
      tips : tips,
      level : level,
      contributed_by : contributed
    }
    try {
      const res = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beerToCreate)
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
    navigate('/beers')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3"> 
        <label className="form-label" htmlFor="name"> Name </label>
        <input className="form-control" name='name' value={name} type="text" onChange={(e)=> setName(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="tagline"> Tagline </label>
        <input className="form-control" name='tagline' value={tagline} type="text" onChange={(e)=> setTagline(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="description"> Description </label>
        <input className="form-control" name='description' value={description} type="text"  onChange={(e)=> setDescription(e.target.value)}/>
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="brewed"> First brewed </label>
        <input className="form-control" name='brewed' value={brewed} type="text"  onChange={(e)=> setBrewed(e.target.value)}/>
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="tips"> Brewers Tips </label>
        <input className="form-control" name='tips' value={tips} type="text" onChange={(e)=> setTips(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="level"> Attenuation Level </label>
        <input className="form-control" name='level' value={level} type="number" onChange={(e)=> setLevel(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="contributed_by"> Contribute by : </label>
        <input className="form-control" name='contributed_by' value={contributed} type="text"  onChange={(e)=> setContributed(e.target.value)}/>
      </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default NewBeer