import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
function Section({contactRef}) {
    const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   

    return (
        <>
            <div className=' absolute -z-10   '>
                <img src='background.jpg' className="  opacity-10 w-screen md:h-screen " alt='' />
            </div>
            <div className='  '>
                <div className='z-10  flex  h-screen '>
                    <div class=" md:ml-5 w-screen lg:ml-10 flex justify-start items-center relative " >
                        <div class="flex ml-5 flex-col">
                            <h2 class=" text-6xl lg:text-8xl font-semibold hidden sm:block">Hi,I'm Dhruv Jindal</h2>
                            <div className='text-6xl lg:text-8xl font-semibold sm:hidden'>
                                <p>Hi, I'm</p>
                                <p>Dhruv Jindal</p>
                            </div>
                            <p class="md:text-2xl lg:text-3xl font-semibold ml-1 my-4 md:my-8 ">I'm a passionate fullstack developer </p>
                            <p className='text-wrap lg:w-1/2 mx-1 '>Dedicated and principled professional committed to execution excellence. Known for unwavering
                                integrity and a meticulous approach to tasks.
                            </p>
                            <motion.button onClick={scrollToContact} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className='py-3 px-10 m-1 mt-4 md:mt-8 bg-black text-white w-fit rounded-3xl'>HIRE ME!</motion.button>
                        </div>
                        <div className='min-w-96 scale-150 hidden xl:flex'>
                            <img src='myPhoto.png' className='' alt='myPhoto' />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section