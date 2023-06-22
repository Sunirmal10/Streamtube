import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box, IconButton } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import { randomColor } from './Functions';
import { VidContext } from './VidContext';


const VideoCard = ({video: {id: {videoId}, snippet}}) => {

    const {margin} = useContext(VidContext)

  return (
    <Card variant='plain' sx={{width: {md: '22.5rem', xs: '100%' }, height:'21rem', border: 'none', borderRadius:'0.85rem', backgroundColor: 'inherit'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width: '21rem', height: '11.5rem', borderRadius:'0.85rem'}}
            />
        </Link>
        <CardContent sx={{ 
            display:'flex', flexDirection:'row', backgroundColor: '#0f0f0f', height: '6.5rem', gap: '0.7rem', px: '0', py: '0.7rem'
            }}>
            <Box >
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
               <Box
                backgroundColor={randomColor}
               sx={{borderRadius: '50%',
                   height: '2.4rem',
                   width: '2.4rem',
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   opacity: '0.3',
                   
             }}
               ></Box>
            </Link>
            </Box>
            
            <Box>
            <Link style={{display: 'flex', width: '15.5rem', flexWrap: 'wrap',
            }} to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' color={`#FFFFFF`}>
                    {snippet?.title.slice(0,55) || demoVideoTitle.slice(0,55)}
                </Typography>
            </Link>
            
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' color={`grey`} sx={{display: 'flex', flexWrap:'wrap', alignItems: 'center'}}>
                    <span style={{display: 'flex', alignItems: 'center'}}>{snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: '.9375rem', color: 'grey', ml: '0.315rem'}}/></span>  
                </Typography>
            </Link>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle2' color={`grey`} sx={{display: 'flex', alignItems: 'center'}}>
                   123K views • 10 hours ago
                   
                </Typography>
            </Link>
            
            </Box>
            
        </CardContent>
    </Card>
  )
}
  
export default VideoCard