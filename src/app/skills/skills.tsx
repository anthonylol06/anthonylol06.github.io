'use client';

import React, { useState } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState("web-dev");
    const [active, setActive] = useState(skills);

    const handleSkillsDisplay = (skill: string) => {
        setSkills(skill);
    };

    const handleActive = (skill: string) => {
        setActive(skill);
    }

    return (
        <div id="skills" className='grid grid-flow-row gap-4 py-4 justify-center justify-items-start mx-6 sm:mx-0'>
            <h1 className='text-2xl'>Skills</h1>
            <div className='flex flex-row gap-4 py-4 justify-center justify-items-start items-start'>
                <div className='flex flex-col gap-4 justify-center justify-items-start'>
                    <div 
                        onMouseMove={() => handleActive("web-dev")} 
                        onClick={() => { handleSkillsDisplay("web-dev") }} 
                        className={`transition ease-in-out delay-50 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-md px-2 py-1 shadow hover:shadow-inner hover:scale-110 duration-150
                        `}>Web</div>
                    <div 
                        onMouseMove={() => handleActive("mobile-dev")} 
                        onClick={() => { handleSkillsDisplay("mobile-dev") }} 
                        className={`transition ease-in-out delay-50 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-md px-2 py-1 shadow hover:shadow-inner hover:scale-110 duration-150
                        `}>Mobile</div>
                    <div 
                        onMouseMove={() => handleActive("db")}
                        onClick={() => { handleSkillsDisplay("db") }} 
                        className={`transition ease-in-out delay-50 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-md px-2 py-1 shadow hover:shadow-inner hover:scale-110 duration-150
                        `}>Database</div>
                    <div 
                        onMouseMove={() => handleActive("lang")} 
                        onClick={() => { handleSkillsDisplay("lang") }} 
                        className={`transition ease-in-out delay-50 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-md px-2 py-1 shadow hover:shadow-inner hover:scale-110 duration-150
                        `}>Languages</div>
                    <div 
                        onMouseMove={() => handleActive("course")} 
                        onClick={() => { handleSkillsDisplay("course") }} 
                        className={`transition ease-in-out delay-50 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-md px-2 py-1 shadow hover:shadow-inner hover:scale-110 duration-150
                        `}>Courses Taken</div>
                    <div 
                        onMouseMove={() => handleActive("others")} 
                        onClick={() => { handleSkillsDisplay("others") }} 
                        className={`transition ease-in-out delay-50 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-md px-2 py-1 shadow hover:shadow-inner hover:scale-110 duration-150
                    `}>Others</div>
                </div>
                <div className='grid grid-flow-row gap-4 justify-items-start'>
                    {skills === "web-dev" && (
                        <>
                            <div>React JS</div>
                            <div>Next JS</div>
                            <div>Tailwind CSS</div>
                            <div>Express JS</div>
                            <div>Socket.IO</div>
                            <div>jQuery</div>
                            <div>PHP</div>
                        </>
                    )}
                    {skills === "mobile-dev" && (
                        <>
                            <div>Flutter</div>
                            <div>Kotlin</div>
                        </>
                    )}
                    {skills === "db" && (
                        <>
                            <div>MySQL</div>
                            <div>PostgreSQL</div>
                            <div>MongoDB</div>
                        </>
                    )}
                    {skills === "lang" && (
                        <>
                            <div>C</div>
                            <div>C++</div>
                            <div>Python</div>
                            <div>Java</div>
                        </>
                    )}
                    {skills === "others" && (
                        <>
                            <div>Docker</div>
                            <div>Linux</div>
                            <div>Git</div>
                            <div>Machine Learning</div>
                            <div>Artificial Intelligence</div>
                        </>
                    )}
                    {skills === "course" && (
                        <>
                            <div>CENG3420 Computer Organization</div>
                            <div>CSCI2100 Data Structure</div>
                            <div>CSCI3100 Software Engineering</div>
                            <div>CSCI3130 Formal Languages and Automata Theory</div>
                            <div>CSCI3150 Intro to Operating System</div>
                            <div>CSCI3160 Design and Analysis of Algorithms</div>
                            <div>CSCI3170 Intro to Database System</div>
                            <div>CSCI3180 Principle of Programming Languages</div>
                            <div>CSCI3230 Intro to AI</div>
                            <div>CSCI4140 Open-Source Software Project Development</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;