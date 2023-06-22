import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({channelDetail}) => {
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '1.25rem',
      
      width: {xs: '25.25rem', md: '20rem'},
      height: '27.375rem',
      margin:'auto'
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#FFFFFF'
        }}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet.title}
          sx={{borderRadius: '50%',
              height: '11.25rem',
              width: '11.25rem',
              mb: 2,
              border: '1px solid #e3e3e3',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
        }}
          />
          <Typography variant='h5'>
            {
              channelDetail?.snippet?.title
            }
            <CheckCircle sx={{fontSize: '.9375rem',  color: 'grey', ml: '0.315rem'}}/>

          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{color: 'lightgrey', fontSize: 'small'}}>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
                  <span> subscribers</span>
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard


