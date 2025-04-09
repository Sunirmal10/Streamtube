import React from 'react'
import {Box, CardContent, CardMedia, Stack, Typography} from '@mui/material';
import { demoProfilePicture } from '../../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({channelDetail}) => {

  function formatNumberCount(likes) {
    if (likes >= 1_000_000) {
      return (likes / 1_000_000).toFixed(1) + "M"; // 1_000_000 === 1000000 in JS( used for better viewing)
    } else if (likes >= 1000) {
      return (likes / 1000).toFixed(1) + "K";
    } else {
      return likes; // for numbers below 1000, return as is
    }
  }

  console.log(channelDetail, "channelDetail")

  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '1.25rem',
      width: '100%',
      height: '16rem',
      margin:'auto',
   
    }}>
      <Stack direction={'row'} gap={'1rem'}>
      <CardContent sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
          height: '13rem'
        }}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet.title}
          sx={{borderRadius: '50%',
              height: '11rem',
              width: '11rem',
              mb: 2,
              border: '1px solid #e3e3e3',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
        }}
          />
         
        </CardContent>

        <Stack direction={'column'} gap={'0.5rem'} marginTop={'0.5rem'}
         padding={'1rem'}>
          {/* title */}
        <Typography variant='h5'
        sx={{
          fontWeight: 'bold',
          color: 'white',

        }}
        >
            {
              channelDetail?.snippet?.title
            }
            <CheckCircle sx={{fontSize: '.9375rem',  color: 'grey', ml: '0.315rem'}}/>

          </Typography>
{/* subscribers and views */}
            <span
            style={{
              display: 'flex',
              gap: "0.5rem",
              color: 'lightgray',
              alignItems: 'center',
              
            }}
            >
              
          {channelDetail?.snippet?.customUrl && (
            <Typography sx={{color: 'lightgrey', fontSize: '1rem', fontWeight: "bold"}}>
                {channelDetail?.snippet?.customUrl}
            </Typography>
          )}
            • 
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{color: 'lightgrey', fontSize: '1rem'}}>
                {formatNumberCount(channelDetail?.statistics?.subscriberCount)}
                  <span> subscribers</span>
            </Typography>
          )}
               • 
          {channelDetail?.statistics?.videoCount && (
            <Typography sx={{color: 'lightgrey', fontSize: '1rem'}}>
                {formatNumberCount(channelDetail?.statistics?.videoCount)}
                  <span> videos</span>
            </Typography>
          )}

            </span>
            <Typography
            color={'lightgray'}
            fontSize={'1rem'}
            >
              {
                channelDetail?.snippet?.description.slice(0,50)
              }...<strong style={{color: 'white'}}>more</strong>
            </Typography>

                        
      <button className='subs-btn'
      style={{
        marginLeft: "0",
        marginTop: '0.5rem',
        
        
      }}
      >
     
     Subscribe
       </button>
        </Stack>

      </Stack>
    
      
 
     
    </Box>
  )
}

export default ChannelCard


