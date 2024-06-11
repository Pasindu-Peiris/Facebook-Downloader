import React from 'react'

const Downbody = () => {
    return (
        <div className=' w-[100%] h-[80vh] flex items-center justify-center'>

            <div className=' logo block'>
                <div className="logo  text-center">
                    <a href='!' className=' text-3xl'><p><span className=' text-blue-600'>FB </span>.Save</p></a>
                    <p className=' text-xl p-3'>Facebook Video Online Free Downloader</p>
                </div>

                <div className="inputbox">

                    <form >

                        <input type="link" name="link" id="link" className=' w-[600px] h-[9vh] p-3 outline-none mx-2' />
                        <input type="submit" value="Download" className=' text-white w-[120px] h-[9vh] bg-sky-950 p-3 outline-none' />

                    </form>

                </div>

            </div>


        </div>
    )
}

export default Downbody