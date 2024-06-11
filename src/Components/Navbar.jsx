import React from 'react'

const Navbar = () => {
  return (
    <nav className='head bg-slate-800 text-white text-xl flex justify-around items-center px-4 py-5 h-14'>
       <div className='logo font-bold'>
            
            <span className="text-green-700">
                &lt;
            </span>
            Pass
            <span className="text-green-700">
                LOCK/ &gt;
            </span>
            
        </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className="hover:font-bold" href="/">Home</a>
                <a className="hover:font-bold" href="#">About</a>
                <a className="hover:font-bold" href="#">Contact</a>
            </li>
        </ul> */}
        <button className='text-white bg-green-900 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
            <img className="invert p-1 w-10" src="icons/github.svg" alt="" />
            <span className="font-bold px-2">Github</span>
        </button>

    </nav>
  )
}

export default Navbar
