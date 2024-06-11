import React from 'react'


const Nav = () => {
  return (
    <div>

      <nav className='w-[100%] h-20  bg-sky-950 flex items-center justify-around border-b-2'>

        <div className="logo text-white">
          <a href='!' className=' text-2xl flex items-center justify-start'><p><span className=' text-blue-600'>FB </span>.Save</p></a>
        </div>

        <ul className='menu flex items-center gap-6 text-white'>
          <li><a href='!' className=' capitalize text-xl hover:text-blue-600'>How to?</a></li>
        </ul>

      </nav>

    </div>
  )
}

export default Nav