import React from 'react'
import ProjectCard from './ProjectCard'

function MoreProject() {
  return (
    <div className='mx-32 mt-10 mb-32'>
        <div>
            <h1 className='text-lg font-semibold'>More Projects</h1>
        </div>
        <div className='grid grid-cols-4 gap-4 my-10'>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
            <ProjectCard projectName="Discord Clone" techStack="Next.js 13, React Hook Form, Zustand, Shadcn, Typescript"/>
        </div>
    </div>
  )
}

export default MoreProject