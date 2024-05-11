import React from 'react'

const Profile = () => {
  return (
    <div id="profile" className='grid grid-flow-row gap-4 justify-center justify-items-end py-4'>
      <h1 className='text-2xl'>Anthony LO</h1>
      <p>Penultimate Computer Science Student, CUHK</p>
      <div className='grid grid-flow-col gap-4 justify-end'>
        <a href='https://github.com/anthonylol06'><img src="github-mark.svg" className='h-8'></img></a>
        <a href='mailto:anthonylocuhk@gmail.com'><img src="email.svg" className='h-8'></img></a>
      </div>
    </div>
  )
}

export default Profile
