import React from 'react'
import ProjectCard from './ProjectCard'

function MoreProject() {
  return (
    <div className='mx-5 sm:mx-16 md:mx-32 mt-10 mb-32'>
        <div>
            <h1 className='text-lg font-semibold'>More Projects</h1>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
            <ProjectCard projectName="IDS" techStack="React.js, CRA, React-Router, Chart.js, HTML, TailwindCSS, CSS, TailwindUI, JS " link="https://ids-ashy.vercel.app/"/>
            <ProjectCard projectName="Pricing Card" techStack="React.js, CRA, React-Router, HTML, TailwindCSS, CSS, JS " link="https://pricing-card-ten.vercel.app/"/>
            <ProjectCard projectName="Merge PDFs" techStack="React.js, CRA, RC-Slider, HTML, TailwindCSS, CSS, TailwindUI, JS " link="https://github.com/dhruvjindal555/mergePDFs"/>
            <ProjectCard projectName="Text Utilities" techStack="React.js, CRA, React-Router, GH-Pages, HTML, TailwindCSS, CSS, JS " link="https://dhruvjindal555.github.io/TextUtils/"/>
            <ProjectCard projectName="Currency Converter" techStack="React.js, Vite, API Intergration, Made Hook, HTML, TailwindCSS, CSS, JS  " link="https://github.com/dhruvjindal555/Currency-Converter"/>
            <ProjectCard projectName="Password Generator" techStack="React.js, Vite, HTML, TailwindCSS, CSS, JS " link="https://dhruvjindal555.github.io/Password-Generator/"/>
            <ProjectCard projectName="Tic-Tac-Toe Game" techStack="HTML, CSS, JS" link="https://dhruvjindal555.github.io/Tic-Tac-Toe-Game/"/>
            <ProjectCard projectName="Quiz App" techStack="HTML, CSS, JS, LocalStorage Usage" link="https://dhruvjindal555.github.io/Quiz-App/"/>
            <ProjectCard projectName="To-Do List" techStack="HTML, CSS, JS, LocalStorage Usage" link="https://dhruvjindal555.github.io/To-Do-List/"/>
            <ProjectCard projectName="Weather App" techStack="HTML, CSS, JS, API Integration" link="https://dhruvjindal555.github.io/weatherApp/"/>
            <ProjectCard projectName="Blog Website" techStack="HTML, CSS, JS, Multiple Pages" link="https://dhruvjindal555.github.io/Blog-Website/"/>
            <ProjectCard projectName="Joke-Teller" techStack="HTML, CSS, JS" link="https://dhruvjindal555.github.io/Joke-Teller/"/>
        </div>
    </div>
  )
}

export default MoreProject