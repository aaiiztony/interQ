import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {logo} from '../assets';
import TextRotator from './TextRotator';
import {IconButton } from '@mui/material';
import {LogoutRounded , LoginRounded } from '@mui/icons-material';

const Hero = () => {
  const asGPT = ["Mentor", "Instructor", "Invigilator", "Sensei"];
  const [isLogged, setIsLogged] = useState(true);
  
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex flex-row justify-between my-3 items-center w-full mb-10'>
        <Link to='/'>
        <img src={logo} alt="logo-img" className='w-28 object-contain' />
        </Link>
        <div className="flex">
          {isLogged ?(
            <IconButton aria-label="logout" color='primary' size='large'>
            <LogoutRounded />
          </IconButton>):
            (
            <IconButton aria-label="signin" color='primary' size='large'>
              <LoginRounded />
            </IconButton>
          )}
        </div>
    </nav>
    <h1 className='head_text'>
      Get access to <br className='max-md:hidden'/><TextRotator asGPT={asGPT}/>GPT
    </h1>
    <h2 className='desc'>
    Interview Preparations with <span className='font-bold font-inter blue_gradient'>interQ</span> <br /> Practice Coding Problems, Mock Interviews, and Much More!
    </h2>
</header>
  )
}

export default Hero