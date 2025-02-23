import React from 'react'
import Project from './Project'
import R_Project from './R_Project'

function Portfolio({ portfolioRef }) {
    return (
        <div className='' ref={portfolioRef} >
            <div className='my-8 sm:my-10'>
                <h1 className='text-5xl font-semibold text-center  '>Portfolio</h1>
            </div>
            <div className='flex flex-col '>
                <Project
                    img="apniDukaan.png"
                    projectNo="1"
                    heading="Apni Dukaan"
                    gitLink="https://github.com/dhruvjindal555/E-Commerce-Clone"
                    deployedLink="https://apni-dukaan-peach.vercel.app/"
                    desc="E-Commerce Clone is a full-stack web application that I built independently, designed to provide a seamless online shopping experience. It features user authentication, product browsing, filtering, cart management, and a smooth checkout process. The platform ensures an intuitive interface for users to explore products and complete secure transactions. Developed using React.js for the frontend and Node.js with Express.js for the backend, the application delivers a responsive and efficient experience. It also integrates Stripe payment processing for secure and reliable transactions. With a modular and scalable architecture, this project showcases my expertise in full-stack development, payment gateway integration, and building e-commerce solutions." />
                <R_Project
                    img="cinemaTrails.png"
                    projectNo="2"
                    heading="Cinema Trails"
                    gitLink="https://github.com/LAKSHAYBANSAL879/Cinema-Trails-Final"
                    deployedLink="https://66d42988694ce50046985a89--fastidious-selkie-4d4978.netlify.app/"
                    desc="Cinema Trails is a movie booking web application that I built with my team to streamline ticket reservations for users and theater management for admins. It features movie browsing, showtime selection, and seamless booking, while admins can manage movies, theaters, and reservations. Developed with React.js for the frontend and Node.js with Express.js for the backend, the platform ensures a smooth user experience and efficient data handling. The project is structured into moviesfrontend (client) and baceknd (server). To run it locally, install dependencies with npm install in both directories and start the servers. This project showcases my expertise in full-stack development, workflow integration, and team collaboration." />
                <Project
                    img="newsStore.png"
                    projectNo="3"
                    heading="NewsStore"
                    gitLink="https://github.com/dhruvjindal555/myNotes-"
                    deployedLink="https://store-news.vercel.app/"
                    desc="NewsStore, is a dynamic news application designed to offer users a secure and engaging news experience. It features robust authentication with JSON Web Tokens (JWT) and encrypted passwords using bcrypt. The application leverages MongoDB to manage authentication data and store users' favorite articles. Articles are fetched from the News API, providing the latest news updates. Users can explore content by category, search for specific topics, and navigate through articles with pagination. The app also includes dark and light theme options and is fully responsive. Built with HTML, Tailwind CSS, and React, it utilizes React Context for state management and includes pop-up alerts to notify users of important messages." />
                <R_Project
                    img="notesApp.jpg"
                    projectNo="4"
                    heading="Notes application"
                    gitLink="https://github.com/dhruvjindal555/myNotes-"
                    deployedLink="https://my-notes-tau-eight.vercel.app/login"
                    desc="A comprehensive notes web app, combines HTML, Bootstrap CSS, ReactJS, NodeJS, and Express to deliver user-friendly interface. Supports full CRUD operations, ensuring seamless note management. Integrated with MongoDB Atlas for efficient data storage. Leverages React-Router for smooth navigation " />
                <Project
                    img="newsApp.jpg"
                    projectNo="4"
                    heading="News application"
                    gitLink="https://github.com/dhruvjindal555/NewsCenter"
                    deployedLink="https://github.com/dhruvjindal555/NewsCenter"
                    desc="NewsCenter, a cutting-edge news app, crafted using HTML, Bootstrap CSS, and ReactJS. It seamlessly integrates with the News API from newsapi.org. Leveraging React-Router for dynamic navigation ,function-based programming." />
                <R_Project
                    img="bloodBankWeb.jpg"
                    projectNo="5"
                    heading="Blood Bank Management Website "
                    gitLink="https://github.com/LAKSHAYBANSAL879/BLOOD-BANK-MANAGMENT"
                    deployedLink="https://github.com/LAKSHAYBANSAL879/BLOOD-BANK-MANAGMENT"
                    desc="Welcome to my portfolio! I am a conscientious and disciplined individual, dedicated to excellence in every endeavor. With a strong work ethic, I embody a relentless pursuit of quality and innovation. I thrive on challenges, leveraging my creativity to deliver impactful solutions. As a hardworking professional, I bring a unique blend of strategic thinking and hands-on execution to my projects. Through disciplined project management and a commitment to continuous improvement, I ensure the successful realization of goals. " />
                <Project
                    img="spotifyClone.png"
                    projectNo="6"
                    heading="Spotify clone project"
                    gitLink="https://github.com/dhruvjindal555/Spotify-Clone-Project"
                    deployedLink="https://dhruvjindal555.github.io/Spotify-Clone-Project/"
                    desc="A Spotify-inspired project built with HTML, CSS, and JavaScript. Offers music streaming with dynamic controls and seamless navigation for front-end developers." />
            </div>

        </div>
    )
}

export default Portfolio