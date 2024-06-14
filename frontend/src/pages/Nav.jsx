import React from 'react'


const Nav = () => {
  return (
    <div>

      <nav className='w-[100%] h-20  flex items-center justify-around border-b-2 fixed' style={{backgroundColor:" #003153"}}>

        <div className="logo text-white">
          <a href='/' className=' text-2xl flex items-center justify-start'><p><span className=' text-[#2D68C4] '>FB </span>.Save</p></a>
        </div>

        {/* <ul className='menu flex items-center gap-6 text-white'>
          <li><a href='!' className=' capitalize text-sm hover:text-[#003153] rounded'>How to ?</a></li>
        </ul> */}

      </nav>

    </div>
  )
}

export default Nav