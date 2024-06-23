import React from 'react'
import { motion } from "framer-motion";

function WhatIKnow() {
    return (
        <>

            <div className='col-span-3 flex flex-col justify-center mx-2 my-5 sm:mx-5 lg:mx-1'>
                <div className='ml-5 my-2 md:my-5'>
                    <h1 className='text-3xl font-semibold text-left  '>What I Know</h1>
                </div>
                <div className='grid grid-cols-2 2xl:grid-cols-4 gap-0.5 sm:gap-x-4 '>
                    <motion.div whileHover={{ scale: 1.1 }} className='border border-1 col-span-1 rounded-lg p-2 sm:p-6  m-2 shadow-md '>
                        <div>
                            <h1 className=' text-left font-medium '>Languages</h1>
                        </div>
                        <div className='flex flex-wrap sm:gap-3 gap-1 my-4'>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>C</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>C++</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Python</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>JavaScript</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>SQL</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>JAVA</span></div>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border border-1 col-span-1 rounded-lg p-2 sm:p-6  m-2 shadow-md '>
                        <div>
                            <h1 className=' text-left font-medium '>Libraries</h1>
                        </div>
                        <div className='flex flex-wrap sm:gap-3 gap-1 my-4'>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Numpy</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Pandas</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Matplotlib</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Streamlit</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Plotly</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Requests</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>BeautifulSoup</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Selenium</span></div>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border border-1 col-span-1 rounded-lg p-2 sm:p-6  m-2 shadow-md '>
                        <div>
                            <h1 className=' text-left font-medium '>Frameworks</h1>
                        </div>
                        <div className='flex flex-wrap sm:gap-3 gap-1 my-4'>

                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>React.js</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Node.js</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Express</span></div>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border border-1 col-span-1 rounded-lg p-2 sm:p-6  m-2 shadow-md '>
                        <div>
                            <h1 className=' text-left font-medium '>Developer Tools</h1>
                        </div>
                        <div className='flex flex-wrap sm:gap-3 gap-1 my-4'>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Git </span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>GitHub </span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>VS Code </span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Postman </span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Jupyter Notebook</span></div>
                            <div className='flex justify-center items-center py-1 px-2  bg-black text-white text-sm w-fit rounded-md'>
                                <span>Tableau</span></div>
                        </div>
                    </motion.div>

                </div>



            </div>
        </>
    )
}

export default WhatIKnow