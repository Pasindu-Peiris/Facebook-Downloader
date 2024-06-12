import React, { useState } from 'react'
import axios from 'axios'

const Downbody = () => {

    const [slink, setLink] = useState('')
    const [vdata, setvdata] = useState(null)


    const hadleSubmit = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8090/links/getdata', { slink }).then((res) => {
            console.log(res.data.data);
            setvdata(res.data.data)

        })



    }



    return (
        <div className=' w-[100%] h-[100vh] flex items-center justify-center'>

            <div className=' logo block'>
                <div className="logo  text-center">
                    <a href='!' className=' text-3xl'><p><span className=' text-blue-600'>FB </span>.Save </p> </a>
                    <p className=' text-xl p-2'>Facebook Video Online Free Downloader</p>
                    <p className=' text-gray-500'>Download Facebook Videos Online</p>
                </div>

                {
                    vdata == null ?

                        <div className="inputbox mt-6">

                            <form onSubmit={hadleSubmit} >

                                <input type="url"

                                    onChange={(e) => {
                                        setLink(e.target.value);
                                    }}

                                    name="link" id="link" className=' w-[550px] h-[9vh] p-3 outline-none mx-2' placeholder='Enter Facebook Video Download Link....' />
                                <input type="submit" value="Download" className=' text-white w-[120px] h-[9vh] bg-sky-950 p-3 outline-none' />

                            </form>

                        </div>
                        :
                        <div className=' grid items-center justify-center'>

                            <div className="flex mt-6 items-center justify-center mp4v w-[250px] h-[200px] bg-sky-950 overflow-hidden">
                                {/* <video width="320" height="240">
                                    <source src={vdata[0].url} type="video/mp4" />

                                </video> */}
                                <img src={vdata[0].thumbnail} alt=""  />
                            </div>



                            <a href={vdata[0].url} download="proposed_file_name"> Download</a>



                        </div>
                }

            </div>


        </div>
    )
}

export default Downbody