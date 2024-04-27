import React from 'react'
import '../App.css';

export default function Home() {
  return (
    <div>
        <header 
        className="App-header"
        >
        <img src="/logo.svg" alt="Logo" className="logo" />
        {/* <p className="company">Art Gallery</p>
        <p className="tagline">Discover and appreciate unique artwork</p> */}
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      
    </div>
  )
}
