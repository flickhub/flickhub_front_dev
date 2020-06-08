import React from 'react'
import ReactDOM from 'react-dom'

const Navbar = () => {
    return (
        <header id='navbar' style={{top: 0, left: 0, position: "fixed", backgroundColor: "black"}}>
            <button id='leftBtn' className='btn btn-link' href="#" >Logo</button>
            <div id='rightBtn'>
                <button href="#" className='btn btn-link'  >About</button>
                <button href="#" className='btn btn-link' >Contact Us</button>
                <button href= "#" className='btn btn-link' >Feedback</button>
            </div>
            
        </header>
    )
}
export default Navbar;