import React from 'react'

function Section() {
    return (
        <>
            <div className=' absolute -z-10 '>
                <img src='background.jpg' className="  opacity-10 w-screen h-screen " alt='' />
            </div>
            <div className='mt-5 '>
                <div className='z-20 w-full flex justify-between items-center h-screen'>
                    <div class="mb-32 ml-10 w-fit flex justify-center items-center " >
                        <div class="flex ml-5 flex-col">
                            <h2 class=" text-8xl font-semibold">Hi,I'm Dhruv Jindal</h2>
                            <p class="text-3xl font-semibold ml-1 my-8 ">I'm a passionate fullstack developer </p>
                            <p className='text-wrap w-3/4 ml-1'>Dedicated and principled professional committed to execution excellence. Known for unwavering
                            integrity and a meticulous approach to tasks.
                            </p>
                            <button className='py-3 px-10 m-1 mt-8 bg-black text-white w-fit rounded-3xl'>HIRE ME!</button>
                        </div>
                    </div>
                    <div className='overflow-hidden scale-125 '>
                        <img src='myPhoto.jpg' className=' ' alt='myPhoto' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section