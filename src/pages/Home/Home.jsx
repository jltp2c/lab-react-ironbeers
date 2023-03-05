import React from 'react'
import {NavLink} from 'react-router-dom'
import random from '../../assets/random-beer.png';
import all from '../../assets/beers.png';
import create from '../../assets/new-beer.png'

function Home() {
  return (
    <div className="list-group">
      <NavLink to="/random-beer" style={{ textDecoration: 'none' }} >
        <div className="list-group-item randomList">
          <img src={random} alt='random'  width={300}  />
          <h1>Random Beer</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iure sequi odio nesciunt, tempore aspernatur quo doloremque accusantium mollitia ullam facilis dolores repellat. Aliquam culpa nobis id, rem minima hic.</p>
        </div>
      </NavLink>
      <NavLink to="/beers" style={{ textDecoration: 'none' }} >
        <div className="list-group-item allList">
          <img src={all} alt='allBeers' width={300} />
         <h1>All Beers</h1> 
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iure sequi odio nesciunt, tempore aspernatur quo doloremque accusantium mollitia ullam facilis dolores repellat. Aliquam culpa nobis id, rem minima hic.</p>
        </div>
      </NavLink>
      <NavLink to="/new-beer" style={{ textDecoration: 'none' }} >
        <div className="list-group-item createList">
          <img src={create} alt='create'  width={300}  />
          <h1>Create your beer</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iure sequi odio nesciunt, tempore aspernatur quo doloremque accusantium mollitia ullam facilis dolores repellat. Aliquam culpa nobis id, rem minima hic.</p>
        </div>
      </NavLink>
    </div>
  )
}

export default Home