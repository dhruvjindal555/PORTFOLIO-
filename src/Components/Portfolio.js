import React from 'react'
import Project from './Project'
import R_Project from './R_Project'

function Portfolio({portfolioRef}) {
    return (
        <div className=''  ref={portfolioRef} >
            <div className='my-8 sm:my-10'>
                <h1 className='text-5xl font-semibold text-center  '>Portfolio</h1>
            </div>
            <div className='flex flex-col '>
                <Project
                    img="notesApp.jpg"
                    projectNo="1"
                    heading="Notes application"
                    gitLink="https://github.com/dhruvjindal555/myNotes-"
                    deployedLink="https://my-notes-tau-eight.vercel.app/login"
                    desc="A comprehensive notes web app, combines HTML, Bootstrap CSS, ReactJS, NodeJS, and
Express to deliver user-friendly interface.
Supports full CRUD operations, ensuring seamless note management.
Integrated with MongoDB Atlas for efficient data storage.
leverages React-Router for smooth navigation " />
                <R_Project
                    img="newsApp.jpg"
                    projectNo="2"
                    heading="News application"
                    gitLink="https://github.com/dhruvjindal555/NewsCenter"
                    deployedLink="https://github.com/dhruvjindal555/NewsCenter"
                    desc="NewsCenter, a cutting-edge news app, crafted using HTML, Bootstrap CSS, and ReactJS.
It seamlessly integrates with the News API from newsapi.org.
Leveraging React-Router for dynamic navigation ,function-based programming." />
                <Project
                    img="bloodBankWeb.jpg"
                    projectNo="3"
                    heading="Blood Bank Management Website "
                    gitLink="https://github.com/LAKSHAYBANSAL879/BLOOD-BANK-MANAGMENT"
                    deployedLink="https://github.com/LAKSHAYBANSAL879/BLOOD-BANK-MANAGMENT"
                    desc="Welcome to my portfolio! I am a conscientious and disciplined individual, dedicated to excellence in every endeavor. With a strong work ethic, I embody a relentless pursuit of quality and innovation. I thrive on challenges, leveraging my creativity to deliver impactful solutions. As a hardworking professional, I bring a unique blend of strategic thinking and hands-on execution to my projects. Through disciplined project management and a commitment to continuous improvement, I ensure the successful realization of goals. " />
                <R_Project
                    img="spotifyClone.png"
                    projectNo="4"
                    heading="Spotify clone project"
                    gitLink="https://github.com/dhruvjindal555/Spotify-Clone-Project"
                    deployedLink="https://dhruvjindal555.github.io/Spotify-Clone-Project/"
                    desc="A Spotify-inspired project built with HTML, CSS, and JavaScript.
Offers music streaming with dynamic controls and seamless navigation for front-end
developers.
 " />
            </div>

        </div>
    )
}

export default Portfolio