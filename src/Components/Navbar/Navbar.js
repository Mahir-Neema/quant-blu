import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbarcontainer'>
        <div className="logo">Quantblu</div>
        <div className="buttons">
            <button className="login">Log in</button>
            <button className="sign_up">Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar