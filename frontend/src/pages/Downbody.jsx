import React, { useState } from 'react'

const Downbody = () => {

    const [link , setLink] = useState('')


    const hadleSubmit = (e) => {

        e.preventDefault();

        alert(link)



    }



    return (
        <div className=' w-[100%] h-[80vh] flex items-center justify-center'>

            <div className=' logo block'>
                <div className="logo  text-center">
                    <a href='!' className=' text-3xl'><p><span className=' text-blue-600'>FB </span>.Save </p> </a>
                    <p className=' text-xl p-2'>Facebook Video Online Free Downloader</p>
                    <p className=' text-gray-500'>Download Facebook Videos Online</p>
                </div>

                <div className="inputbox mt-6">

                    <form onSubmit={hadleSubmit} >

                        <input type="link"

                        onChange={ (e) => {
                            setLink(e.target.value);
                        }}

                        name="link" id="link" className=' w-[550px] h-[9vh] p-3 outline-none mx-2' placeholder='Enter Facebook Video Download Link....' />
                        <input type="submit" value="Download" className=' text-white w-[120px] h-[9vh] bg-sky-950 p-3 outline-none' />

                    </form>

                </div>

            </div>


        </div>
    )
}

export default Downbody