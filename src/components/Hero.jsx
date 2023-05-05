import React from 'react';
import { Link } from 'react-router-dom';
import {logo} from '../assets';
import TextRotator from './TextRotator';
const Hero = () => {
  const asGPT = ["Mentor", "Instructor", "Invigilator", "Sensei"];
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex flex-row justify-between my-3 items-center w-full mb-10'>
        <Link to='/'>
        <img src={logo} alt="logo-img" className='w-28 object-contain' />
        </Link>
        <button 
        className='black_btn'
        onClick={()=> window.open('https://github.com/aaiiztony', '_blank')}>
          Github
          </button>
    </nav>
    <h1 className='head_text'>
      Get access to <br className='max-md:hidden'/><TextRotator asGPT={asGPT}/>GPT
    </h1>
    <h2 className='desc'>
    Interview Preparations with <span className='font-bold font-inter blue_gradient'>interQ</span> Practice Coding Problems, Mock Interviews, and Much More!
    </h2>
</header>
  )
}

export default Hero