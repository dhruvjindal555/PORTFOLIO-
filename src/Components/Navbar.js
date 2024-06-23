import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
function Navbar({portfolioRef,aboutRef,contactRef}) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)
    const scrollToPortfolio = () => portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   
    const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   
    const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   
    return (
        <div className='sticky  top-0 z-10 w-full  ' style={{backgroundColor:"rgb(237, 237, 237)"}} >        

            <nav className="  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">DJ</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                            </li>
                            <li>
                                <div onClick={scrollToAbout} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 cursor-pointer md:hover:text-blue-700 md:p-0   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About me</div>
                            </li>
                            <li>
                                <div  onClick={scrollToPortfolio} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</div>
                            </li>
                            <li>
                                <a href="Dhruv_Jindal_Resume.pdf" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</a>
                            </li>
                           
                            <li>
                                <div onClick={scrollToContact} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 cursor-pointer md:hover:text-blue-700 md:p-0   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact me</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <motion.div
                className="h-1 bg-blue-600 ml-0"
                style={{ scaleX: scaleX }}

            />
        </div>
    )
}

export default Navbar