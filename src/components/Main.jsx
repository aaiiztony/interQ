import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RoleCard from './RoleCard';
import { useGetImagesQuery } from '../services/Unsplash';
// import { CircularProgress } from '@mui/material';

const Main = () => {
  const {data, error, isLoading} = useGetImagesQuery();
  const [cardImg, setCardImg] = useState('');
  return(
    <>
    <div className='my-10 md:w-[50%] w-full px-1'>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"100%"}}
      variant='elevation'
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Generate Interview Questions"
        inputProps={{ 'aria-label': 'generate questions' }}
        color='primary'
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
    <div className="flex gap-4 flex-wrap mt-10">
    <RoleCard cardImg={cardImg} />
    <RoleCard cardImg={cardImg} />
    <RoleCard cardImg={cardImg} />
    <RoleCard cardImg={cardImg} />
    </div>
    </>
)}

export default Main

