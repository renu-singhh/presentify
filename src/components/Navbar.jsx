import React from 'react';


function Navbar() {
  

  return (
    <div className='fixed z-[999] top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-slate-500 shadow-lg'>
      <div className="logo" style={{ position: 'relative' }}>
        <img
          className='w-8 h-8 rounded-full object-cover'
          src="singhhhhhh.jpg"
          alt="Logo"
        />
        <div
          className='absolute -top-1 -left-1 w-12 h-12 rounded-full '
          style={{ zIndex: '-1' }}
        />
      </div>
      <div className='links flex gap-6'>
        <button className="text-lg capitalize font-semibold border-none outline-none bg-transparent cursor-pointer focus:outline-none">Services</button>
        <button className="text-lg capitalize font-semibold border-none outline-none bg-transparent cursor-pointer focus:outline-none">Our Work</button>
        <button className="text-lg capitalize font-semibold border-none outline-none bg-transparent cursor-pointer focus:outline-none">About Us</button>
        <button className="text-lg capitalize font-semibold border-none outline-none bg-transparent cursor-pointer focus:outline-none">Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;
