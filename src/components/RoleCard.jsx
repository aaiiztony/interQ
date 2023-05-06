import { Paper } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {fallbackImg} from '../assets';


const RoleCard = () => {
  return (
    <Paper>
      <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={140}
          width={100}
          className='object-contain'
          image= {fallbackImg}
          alt='card-image'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='text-center'>
            React
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Paper>
  )
}

export default RoleCard