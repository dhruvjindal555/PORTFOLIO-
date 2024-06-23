import React from 'react'
import { motion } from "framer-motion";
function Project({ projectNo, heading, img, gitLink, deployedLink, desc }) {
    return (
        <div className='flex my-10 justify-evenly '>
            <div className=' w-1/3 flex flex-col gap-2'>
                <div>
                    <h1 className='text-xl font-semibold'>Project {" " + projectNo}</h1>
                </div>
                <h1 className='text-2xl font-semibold'>{heading}</h1>
                <p>{desc}</p>
                <div className='flex gap-2 h-full my-2'>
                    <motion.a href={gitLink}
                        whileHover={{ scale: 1.2 }}
                        className=' '>
                        <i class=" fa-brands fa-github fa-2xl"></i>
                    </motion.a>
                    <div className='flex items-center'>

                        <motion.a href={deployedLink}
                            whileHover={{ scale: 1.2 }}
                            className=' border-black border-2 rounded-md px-2 font-semibold'>Demo
                            <i
                                class="fa-solid fa-arrow-right fa-rotate-by pl-1 fa-lg"
                                style={{ "--fa-rotate-angle": "-45deg" }}></i>
                        </motion.a>
                    </div>
                </div>
            </div>
            <div className='w-1/3 flex flex-col justify-center '>
                <a className=' border-8  border-black relative' href={deployedLink} >
                    <img src={img} className='opacity-0 ' />
                    <img src={img} className='absolute h-60 -top-10 left-5 ' />
                </a>

            </div>
        </div>
    )
}

export default Project