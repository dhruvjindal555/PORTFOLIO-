import React from 'react'
import Project from './Project'
import R_Project from './R_Project'

function Portfolio() {
    return (
        <div className=''>
            <div className='my-10'>
                <h1 className='text-5xl font-semibold text-center  '>Portfolio</h1>
            </div>
            <div className='flex flex-col '>
                <Project
                    img="project1.png"
                    projectNo="1"
                    heading="Amazon clone project"
                    gitLink="https://www.amazon.in/"
                    deployedLink="https://www.amazon.in/"
                    desc="Welcome to my portfolio! I am a conscientious and disciplined individual, dedicated to excellence in every endeavor. With a strong work ethic, I embody a relentless pursuit of quality and innovation. I thrive on challenges, leveraging my creativity to deliver impactful solutions. As a hardworking professional, I bring a unique blend of strategic thinking and hands-on execution to my projects. Through disciplined project management and a commitment to continuous improvement, I ensure the successful realization of goals. " />
                <R_Project 
                img="project1.png"
                projectNo="1"
                heading="Amazon clone project"
                gitLink="https://www.amazon.in/"
                deployedLink="https://www.amazon.in/"
                desc="Welcome to my portfolio! I am a conscientious and disciplined individual, dedicated to excellence in every endeavor. With a strong work ethic, I embody a relentless pursuit of quality and innovation. I thrive on challenges, leveraging my creativity to deliver impactful solutions. As a hardworking professional, I bring a unique blend of strategic thinking and hands-on execution to my projects. Through disciplined project management and a commitment to continuous improvement, I ensure the successful realization of goals. " />
                <Project 
                img="project1.png"
                projectNo="1"
                heading="Amazon clone project"
                gitLink="https://www.amazon.in/"
                deployedLink="https://www.amazon.in/"
                desc="Welcome to my portfolio! I am a conscientious and disciplined individual, dedicated to excellence in every endeavor. With a strong work ethic, I embody a relentless pursuit of quality and innovation. I thrive on challenges, leveraging my creativity to deliver impactful solutions. As a hardworking professional, I bring a unique blend of strategic thinking and hands-on execution to my projects. Through disciplined project management and a commitment to continuous improvement, I ensure the successful realization of goals. " />
                <R_Project 
                img="project1.png"
                projectNo="1"
                heading="Amazon clone project"
                gitLink="https://www.amazon.in/"
                deployedLink="https://www.amazon.in/"
                desc="Welcome to my portfolio! I am a conscientious and disciplined individual, dedicated to excellence in every endeavor. With a strong work ethic, I embody a relentless pursuit of quality and innovation. I thrive on challenges, leveraging my creativity to deliver impactful solutions. As a hardworking professional, I bring a unique blend of strategic thinking and hands-on execution to my projects. Through disciplined project management and a commitment to continuous improvement, I ensure the successful realization of goals. " />
            </div>

        </div>
    )
}

export default Portfolio