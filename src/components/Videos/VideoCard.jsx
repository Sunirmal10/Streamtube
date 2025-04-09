import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../../utils/constants';
import { VidContext } from '../Context/VidContext';



const VideoCard = ({video: {id: {videoId}, snippet}}) => {

    const {selectedCategory, getTimeAgo } = useContext(VidContext);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 999) + 1;
      }

    useEffect(() => {
       

          generateRandomNumber()
          
    }, [videoId])

  return (
    <Card variant='plain' sx={{display: 'flex', flexDirection: {xs: 'row', sm: 'column'}, alignItems: 'center', justifyContent: 'center', width: {md: '22rem', xs: '100%' }, height:'19rem', border: 'none', borderRadius:'0.9rem', backgroundColor: 'transparent'}}>
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
               <CardMedia
                backgroundColor="transparent"
                image='/images/logocircle.png'
            
               sx={{borderRadius: '50%',
                   height: '2.5rem',
                   width: '2.5rem',
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   marginTop: '0.18rem',
                   
             }
             }
               ></CardMedia>
            </Link>
            </Box>
            
            <Box>
            <Link style={{display: 'flex', width: '15.5rem', flexWrap: 'wrap',
            }} to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' color={`#FFFFFF`}>
                    {snippet?.title.slice(0,45) || demoVideoTitle.slice(0,45)}
                </Typography>
            </Link>
            
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' color={`grey`} sx={{display: 'flex', flexWrap:'wrap', alignItems: 'center',
                    '&:hover': {
          color: '#d6d2d2',
          cursor: 'pointer', 
        },
                }}>
                    <span style={{display: 'flex', alignItems: 'center',
                  
                    }}>{snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: '.9375rem', color: 'grey', ml: '0.315rem', mb: '0.2rem'}}/></span>  
                </Typography>
            </Link>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle2' color={`grey`} sx={{display: 'flex', alignItems: 'center'}}>
                   { selectedCategory === "Live" ? generateRandomNumber()+"K watching" :
                   
                        generateRandomNumber()+"K views  •  " + getTimeAgo(snippet?.publishTime)
                   
                   }
                </Typography>
            </Link>
            
            </Box>
            
        </CardContent>
    </Card>
  )
}
  
export default VideoCard