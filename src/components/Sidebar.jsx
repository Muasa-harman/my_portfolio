import React from 'react'
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <img className='image' src="https://media.licdn.com/dms/image/D4D03AQG7BUxHF4I8Tg/profile-displayphoto-shrink_800_800/0/1701194850229?e=1710979200&v=beta&t=_4pcIIxCbUnBBApuuGUFLhqB1ocxGyilNSYQWWXUERU" alt="" />
      </div>
      <div className="body">
        <span className="">About</span>
        <span className="Experience">Experience</span>
        <span className="">Education</span>
        <span className="">Skills</span>
        <span className="">Interest</span>
        <span className="">Awards</span>
      </div>
    </div>
  )
}

export default Sidebar