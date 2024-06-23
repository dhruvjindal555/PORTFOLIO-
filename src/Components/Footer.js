import React from 'react'
import { motion } from "framer-motion";

function Footer() {
    return (
        <div>
            <div className='relative bg-gray-200'>

                <div className='mx-auto border-2 w-5/6 lg:w-3/4 border-black '></div>
            </div>

            <footer className='p-5 flex flex-col md:flex-row items-center justify-evenly bg-gray-200'>

                <div>
                    <p className='font-semibold text-xl'>
                        DJ
                    </p>
                </div>
                <div className='flex items-center '>
                    <div className='mx-2' >
                        <i class="fa-regular fa-copyright" ></i>
                    </div>
                    <p>All rights reserved.</p>
                </div>
                <div className='flex mt-4 md:m-0'>
                    <div className='mx-2 font-semibold text-lg' ><p>Connect with me :</p></div>
                    <div className='flex gap-2'>
                        <motion.a whileHover={{ scale: 1.2 }}  href="https://instagram.com/__dhruv.46__"><i class="fa-brands fa-instagram fa-2xl"
                        ></i></motion.a>
                        <motion.a whileHover={{ scale: 1.2 }}  href="https://linkedin.com/in/dhruv-jindal546"><i class="fa-brands fa-linkedin fa-2xl"
                        ></i></motion.a>
                        <motion.a whileHover={{ scale: 1.2 }}  href="https://github.com/dhruvjindal555"><i class="fa-brands fa-github fa-2xl"
                        ></i></motion.a>
                        <motion.a whileHover={{ scale: 1.2 }}  href="https://twitter.com/dhruvjindal546"><i class="fa-brands fa-twitter fa-2xl"
                        ></i></motion.a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer