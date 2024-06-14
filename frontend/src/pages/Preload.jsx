import React from 'react'
import { Blocks } from 'react-loader-spinner'


const Preload = () => {
    return (
        <div className=' flex items-center justify-center w-[100%] h-[45vh]'>


            <Blocks
                height="80"
                width="80"
                color="#BB86FC"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
            />


        </div>
    )
}

export default Preload