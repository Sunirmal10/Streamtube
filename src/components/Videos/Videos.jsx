import React from 'react'
import {Stack, Box} from '@mui/material';
import VideoCard from './VideoCard';
import { FaSpinner } from "react-icons/fa";


const Videos = ({ videos, direction, selectedCategory }) => {

  if (!videos?.length) return
  <FaSpinner className='spinner' />;

 

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={'0.5rem'}>

      {
        videos.map((item,idx)=>(
          <Box key={idx}>
            {/* {item.id.channelId && <ChannelCard channelDetail={item}/>}   */}
            {item.id.videoId && <VideoCard video={item}/>}      
          </Box>
        ))
      }
   
    </Stack>
  )
}

export default Videos
