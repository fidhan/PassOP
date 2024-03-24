npm create vite@latest
select react,typescript,npm install
vscode

src>App.jsx>>COUNTER BY DEFAULT IS THERE
npm run dev

clear all from ui app.jsx
<>
myui
</>
ibelick bg wallpaper 
tailwind css with vite npm install tailwind auto prefixer,init-p,tailwind.config.js
index.css paste tailwind

npm run dev
src>components>navbar.jsx
rafce es7 reactredux graph ql extension

<nav>create<ul>li>a

import navbar in app.jsx
<Nvbar/>
remove app.css

import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-800 flex justify-between items-center px-4 h-16'>
        <div className="logo font-bold ">Passop</div>
        <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="">home</a>
                <a className='hover:font-bold' href="">about</a>
                <a className='hover:font-bold' href="">contact</a>
            </li>
        </ul>
      
    </nav>
  )
}

export default Navbar

manager.jsx
https://bg.ibelick.com/
add to app.jsx


import React from 'react'

const Manager = () => {
  return (
    <>
<div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
<div className="mx-auto container  bg-slate-800">
    <h1>PassOP</h1>
    <p>UR OWN PASSWORD MANAGER</p>
    <div className="text-white flex flex-col p-4 ">
        <input type="text" />
        <div className="flex">
        <input type="password" />
        <input type="text" />
        </div>

    </div>
    </div>
    </>
  )
}

export default Manager
