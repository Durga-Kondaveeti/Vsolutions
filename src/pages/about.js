import React from 'react'
import "../css/about.css"
import durga from '../images/durga.jfif';
import balareddy from '../images/people/balareddy.jpeg'
import chandra from '../images/people/chandrashekar.jpeg'
function about() {
  return (
    <div class="container">
    <div class="person">
      <img src={durga} alt="Person 1"/>
      <div class="details">
        <h2>Venkata Narayana</h2>
        <p>CEO</p>
      </div>
    </div>
    <div class="person">
      <img src={balareddy} alt="Person 2"/>
      <div class="details">
        <h2>Satyasimha Bala reddy</h2>
        <p>CTO</p>
      </div>
    </div>
    <div class="person">
      <img src={durga} alt="Person 3"/>
      <div class="details">
        <h2>Kondaveeti Durga Shankar</h2>
        <p>CMO</p>
      </div>
    </div>
    <div class="person">
      <img src={chandra} alt="Person 4"/>
      <div class="details">
        <h2>chandra shekar</h2>
        <p>Share Holder</p>
      </div>
    </div>
  </div>
  
  )
}

export default about
