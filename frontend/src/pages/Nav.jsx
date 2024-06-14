import React from 'react'


const Nav = () => {
  return (
    <div>

      <nav className='w-[100%] h-20  flex items-center justify-around  fixed' style={{backgroundColor:" #BB86FC"}}>

        <div className="logo text-white">
          <a href='/' className=' text-2xl flex items-center justify-start'><p><span className=' text-[#231a2f] '>FB </span>.Save</p></a>
        </div>

        {/* <ul className='menu flex items-center gap-6 text-white'>
          <li><a href='!' className=' capitalize text-sm hover:text-[#003153] rounded'>How to ?</a></li>
        </ul> */}

      </nav>

    </div>
  )
}

export default Nav