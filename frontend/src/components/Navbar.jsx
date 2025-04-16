import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between p-[2rem] bg-black text-white'>
        <div>
          <h2 className='font-bold text-2xl'>EMERALD BISTRO</h2>
        </div>
        <div>
          <ul className='flex justify-between gap-8'>
            <il className='font-bold text-lg cursor-pointer hover:text-amber-400'>HOME</il>
            <il className='font-bold text-lg cursor-pointer hover:text-amber-400'>RESERVAYIONS</il>
            <il className='font-bold text-lg cursor-pointer hover:text-amber-400'>MENU</il>
            <il className='font-bold text-lg cursor-pointer hover:text-amber-400'>CONTACT</il>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar