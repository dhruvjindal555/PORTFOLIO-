import React from 'react'
import { motion } from "framer-motion";

function ProjectCard({projectName,techStack}) {
    return (
        <motion.a  whileHover={{scale:1.05}} className=' cursor-pointer' >
            <div className=" border-2 border-slate-700 flex flex-col px-4 py-2 h-24 rounded-lg">
                <div className="flex font-bold">{projectName}</div>
                <div className="flex text-info text-xs">{techStack}</div>
            </div>
        </motion.a>
    )
}

export default ProjectCard