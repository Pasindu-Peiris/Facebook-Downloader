import React, { useState } from 'react'
import axios from 'axios'

const Downbody = () => {

    const [slink, setLink] = useState('')
    const [vdata, setvdata] = useState(null)


    const hadleSubmit = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8090/links/getdata', { slink }).then((res) => {
            console.log(res.data);
            setvdata(res.data.data)

        })



    }



    return (
        <div className=' w-[100%] h-[100vh] flex items-center justify-center'>

            <div className=' logo block'>
                <div className="logo  text-center">
                    <a href='!' className=' text-4xl'><p><span className=' ' style={{color:"#4D4DFF"}}>FB </span>.Save </p> </a>
                    <p className=' text-xl p-2'>Facebook Video Online Free Downloader</p>
                    <p className=' text-gray-500'>Download Facebook Videos Online</p>
                </div>

                {
                    vdata == null ?

                        <div className="inputbox mt-8">

                            <form onSubmit={hadleSubmit} >

                                <input type="url"

                                    onChange={(e) => {
                                        setLink(e.target.value);
                                    }}

                                    name="link" id="link" className=' w-[550px] h-[9vh] p-3 outline-none mx-2 border-solid border-2 rounded-md border-[#003153]' placeholder='Enter Facebook Video Download Link....' />
                                <input type="submit" value="Download" className=' text-white w-[120px] h-[9vh] rounded-md bg-[#003153] p-3 outline-none' />

                            </form>

                        </div>
                        :
                        <div className=' flex items-center justify-between mt-6  p-3 w-[500px] h-[250px]'>

                            <div className="flex  items-center justify-center mp4v w-[260px] h-[250px] bg-sky-950 overflow-hidden">
                                <img src={vdata[0].thumbnail} alt=""  />
                            </div>

                            <div className=' grid items-center justify-center gap-8'>
                            <a href={vdata[0].url} download="proposed_file_name"> Download Video In HD</a>

<a href={vdata[0].url} download="proposed_file_name"> Download Video In HD</a>

                            </div>


                         
                        </div>
                }

            </div>


        </div>
    )
}

export default Downbody