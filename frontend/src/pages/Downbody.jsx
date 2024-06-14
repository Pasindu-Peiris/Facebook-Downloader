import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Preload from './Preload'
import Joyride, { STATUS } from 'react-joyride';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Downbody = () => {



    const [{ run, steps }, setState] = useState({
        run: true,
        steps:
            [
                {

                    content: <h2 className='text-xl text-center'> Welcome  <br />Let's begin Tour 🛸 </h2>,
                    locale: { skip: 'Skip tutorial' },
                    placement: 'center',
                    target: "#bbody"

                },
                {

                    content: <h2 className='text-xl'>Enter Your Video Link 🚀</h2>,
                    locale: { skip: 'Skip tutorial' },
                    placement: 'bottom',
                    target: "#bot",
                    title: "First Step"

                },
                {

                    content: <h2 className='text-xl'>Now Click Download Button 🔍</h2>,
                    locale: { skip: 'Skip tutorial' },
                    placement: 'bottom',
                    target: "#step1",
                    title: "Second Step"

                },

            ]

    })

    const [slink, setLink] = useState('')
    const [vdata, setvdata] = useState(null)

    const notify = () => toast('👽 Wait Few Seconds!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

    });

    const notify2 = () => toast('👽 link is not a Facebook!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

    });

    const hadleSubmit = (e) => {

        e.preventDefault();


        //http://localhost:8090/links/


        axios.post('https://facebook-downloader-672k.onrender.com/links/getdata', { slink }).then((res) => {
            console.log(res.data);
            setvdata(res.data.data);


        })

        axios.post('https://facebook-downloader-672k.onrender.com/links/add', { slink }).then((res) => {
            console.log("add")
        })

        notify()
        setIsLoading1(false)

    }

    const [isLoading, setIsLoading] = useState(true);
    const [isLoading1, setIsLoading1] = useState(true);

    useEffect(() => {

        setTimeout(() => {

            setIsLoading(false); // Set isLoading to false when data is ready
        }, 11000); // Simulate a 2-second data loading delay

    })

    const [message, setMessage] = useState('');

    function checkLink(inputdata) {

        const facebookPattern = /^https?:\/\/(www\.)?facebook\.com/;
        const resultElement = inputdata;

        if (facebookPattern.test(resultElement)) {
            setMessage("The link is a Facebook link.")
            document.getElementById('step1').disabled = false;
        } else {
            setMessage("The link is not a Facebook link.")
            document.getElementById('step1').disabled = true;
            notify2();


        }
    }

    return (
        <div className=' xl:w-[100%] h-[100vh] flex items-center justify-center'>

            <Joyride
                continuous
                callback={() => { }}
                run={run}
                steps={steps}
                hideCloseButton
                scrollToFirstStep
                showSkipButton
                showProgress />

            <div className=' logo block'>
                <div className="logo  text-center">
                    <a href='/' className=' text-4xl' ><p id={`bbody`}><span className=' ' style={{ color: "#4D4DFF" }}>FB </span>.Save </p> </a>
                    <p className=' xl:text-xl sm:text-sm p-2'>Facebook Video Online Free Downloader</p>
                    <p className=' text-gray-500'>Download Facebook Videos Online</p>
                </div>

                {
                    isLoading1 ?

                        <div className="inputbox mt-8">

                            <form onSubmit={hadleSubmit} className='  md:flex xl:flex'>


                                <input type="url"

                                    onChange={(e) => {
                                        setLink(e.target.value);
                                    }}

                                    onKeyUp={(e) => {
                                        checkLink(e.target.value);
                                    }}

                                    name="link" id={`bot`} className=' md:w-[450px] xl:w-[550px] h-[9vh] p-3 outline-none mx-2 border-solid border-2 rounded-md border-[#003153]' placeholder='Enter Facebook Video Download Link....' />
                                <input type="submit" id={`step1`} value="Download" className=' cursor-pointer text-white w-[120px] h-[9vh] rounded-md bg-[#003153]  outline-none' />

                            </form>




                        </div>
                        : <>

                            {isLoading ? <Preload /> : <div className='xl:flex sm:grid xl:justify-between items-center mt-8 p-6 sm:w-[100%] md:w-[100%] xl:w-[500px] sm:h-[100%] md:h-[100%] xl:h-[300px] bg-gray-200'>

                                {
                                    vdata === null || undefined || vdata.length < 3?
                                        <>
                                        <h2>No Data Is Available... 👾</h2>
                                        </>

                                        : <>
                                            <div className="flex items-center justify-center  w-[260px] h-[250px] bg-sky-950 overflow-hidden">
                                                <img src={vdata[0].thumbnail} alt="" />
                                            </div>

                                            <div className=' grid items-center justify-center xl:gap-8 sm:gap-8 md:gap-8'>

                                                <a href={vdata[0].url} download="proposed_file_name" className=' bg-slate-800 text-white p-3 rounded-sm mt-5' id={`map1`}> Download {vdata[0].resolution}</a>
                                                <a href={vdata[1].url} download="proposed_file_name" className=' bg-slate-800 text-white p-3 rounded-sm mt-5'> Download {vdata[1].resolution}</a>

                                            </div></>
                                }

                            </div>}


                        </>
                }

            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />

        </div>
    )
}

export default Downbody