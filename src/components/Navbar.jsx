import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return (
        <>
        <nav className='bg-pink-500 flex  m-4px p-3px'>
            <div >
               <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
               <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
               <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar