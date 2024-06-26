import React from 'react'
import WhatIKnow from './WhatIKnow'

function About({aboutRef}) {
    return (
        <div className='lg:grid lg:grid-cols-5 flex flex-col' ref={aboutRef}>
            <div className='m-5 md:m-10 col-span-2'>
                <h1 className='text-5xl font-semibold text-center mb-5  '>About me </h1>
                <p className='m-2 sm:m-5 md:m-10'>Welcome to my portfolio! I am a conscientious and disciplined individual, dedicated to excellence in every endeavor. With a strong work ethic, I embody a relentless pursuit of quality and innovation. I thrive on challenges, leveraging my creativity to deliver impactful solutions. As a hardworking professional, I bring a unique blend of strategic thinking and hands-on execution to my projects. Through disciplined project management and a commitment to continuous improvement, I ensure the successful realization of goals. Explore my portfolio to witness a harmonious fusion of creativity, diligence, and a passion for delivering results that leave a lasting impression.</p>
            </div>
            <WhatIKnow/>
        </div>
    )
}

export default About