import React from 'react'
import '../styles/home.scss'
import vg from '../assets/hello.png'

const Home=()=>{
  return (
    <>
    <div className="home">
    <main>
      <h1>TechSol</h1>
      <p>Solution to all your problems</p>
    </main>
  </div>
  <div className="home2">
    <img src={vg} alt="Graphics"/>

    <div>
      <p>We are your one and only solution to  the tech problems 
        you face
        everyday.We are leading tech company whose aim is to
        increase the 
        problem solving abilities in children
        </p>
    </div>
  </div>
    </>
  )
}
export default Home