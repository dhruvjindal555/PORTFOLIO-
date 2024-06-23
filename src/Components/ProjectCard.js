import React from 'react'
import { motion } from "framer-motion";

function ProjectCard({projectName,techStack,link}) {
    return (
        <motion.a  whileHover={{scale:1.05}} className=' cursor-pointer' href={link} >
            <div className=" border-2 border-slate-700 flex flex-col px-4 py-4 h-full rounded-lg justify-evenly">
                <div className="flex font-bold">{projectName}</div>
                <div className="flex text-info text-xs">{techStack}</div>
            </div>
        </motion.a>
    )
}

export default ProjectCard