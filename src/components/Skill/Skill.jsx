import React from 'react';
import './Skill.scss';
import { UilGithub } from '@iconscout/react-unicons';



const Skill = () => {
  return (
    <div className='Skill' id='Skills'>
      <span>Skills</span>
      <div className="e-icons">
      <img src="https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor" alt="" />
      <img src="https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor" alt="" />
      <img src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor" alt="" />
      <img src="https://icongr.am/devicon/typescript-original.svg?size=128&color=ffffff" alt="" />
      <img src="https://icongr.am/devicon/react-original.svg?size=128&color=currentColor" alt="" />
      <img src="https://icongr.am/devicon/nodejs-original.svg?size=128&color=ffffff" alt="" />
      <img src="https://icongr.am/devicon/bootstrap-plain.svg?size=128&color=ffffff" alt=""/>
      <img src="https://icongr.am/devicon/sass-original.svg?size=128&color=currentColor" alt="" />
      <UilGithub size='128px'/>
      <img src="https://icongr.am/devicon/git-original.svg?size=128&color=currentColor" alt="" />
      <img src="https://icongr.am/devicon/gitlab-original.svg?size=128&color=ffffff" alt="" />
      </div>
      
    </div>
  )
}

export default Skill
