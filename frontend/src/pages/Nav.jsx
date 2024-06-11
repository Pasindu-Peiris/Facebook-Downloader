import React from 'react'
import Imf from '../images/facebook.png';

const Nav = () => {
  return (
    <div>

        <nav className=' bg-stone-700 w-[100%] h-20 flex items-center justify-around '>

            <div className="logo text-white">
                <a href='!' className=' text-3xl  flex items-center justify-center'><span className='p-2'><img src={Imf} alt=""  width={40}/></span>Face Save</a>
            </div>


        </nav>



    </div>
  )
}

export default Nav