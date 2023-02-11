import React from 'react'
import '../styles/home.scss'
import vg from '../assets/hello.png'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home=()=>{
  return (
    <>
    <div className="home" id="home">
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
  <div className="home3" id="about">
  <div>
    <h1>Who are we?</h1>
    <p>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  </div>
  <div className="home4" id="brands">
    <div>
      <h1>Brands</h1>
      <article>
      <div style={{animationDelay:"0.3s",}}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>
        <div style={{animationDelay:"0.7s",}}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>
        <div style={{animationDelay:"1.0s",}}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>
        <div style={{animationDelay:"1.2s",}}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
        
      </article>
    </div>
  </div>
    </>
  )
}
export default Home