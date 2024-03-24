import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800  text-white'>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-16">
        <div className="logo font-bold text-2xl">
        <span className='text-green-700'> &lt;</span> 
          Pass<span className='text-green-700'>OP</span>
          <span className='text-green-700'>/ &gt;</span> 
            </div>
        
        <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="">home</a>
                <a className='hover:font-bold' href="">about</a>
                <a className='hover:font-bold' href="">contact</a>
            </li>
        </ul>
        </div>
      
    </nav>
  )
}

export default Navbar
