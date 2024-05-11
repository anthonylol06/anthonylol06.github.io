import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 shadow-lg'>
        <div className='grid grid-flow-col gap-8 py-4 px-8 bg-slate-400 sm:justify-center justify-end sm:gap-6 sm:px-4'>
            <a href='#profile'><div className='pr-12 font-semibold hidden sm:grid'>Anthony LO</div></a>
            <a href='#projects'><div>Projects</div></a>
            <a href='#skills'><div>Skills</div></a>
            <a href="#contact"><div>Contact</div></a>
        </div>
    </nav>
  )
}

export default Navbar
