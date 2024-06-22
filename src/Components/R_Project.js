import React from 'react'

function R_Project({ projectNo, heading, img, gitLink, deployedLink, desc }) {
    return (
        <div> <div className='flex my-10 justify-evenly'>
            <div className='w-1/3 flex flex-col justify-center '>
                <div className=' border-8  border-black relative ' >
                    <img src={img} className='opacity-0 ' />
                    <img src={img} className='absolute h-60 -top-10 left-5 ' />
                </div>

            </div>
            <div className=' w-1/3 flex flex-col gap-2'>
                <div>
                    <h1 className='text-xl font-semibold'>Project {" " + projectNo}</h1>
                </div>
                <h1 className='text-2xl font-semibold'>{heading}</h1>
                <p>{desc}</p>
                <div className='flex gap-2 h-full my-2'>
                    <a href={gitLink}
                        className=' '>
                        <i class=" fa-brands fa-github fa-2xl"></i>
                    </a>
                    <div className='flex items-center'>

                        <a href={deployedLink}
                            className=' border-black border-2 rounded-md px-2 font-semibold'>Demo
                            <i
                                class="fa-solid fa-arrow-right fa-rotate-by pl-1 fa-lg"
                                style={{ "--fa-rotate-angle": "-45deg" }}></i>
                        </a>
                    </div>
                </div>
            </div>

        </div></div>
    )
}

export default R_Project