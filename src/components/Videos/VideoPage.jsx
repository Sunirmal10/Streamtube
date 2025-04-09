import { ThumbDownAltSharp, ThumbUpAltSharp } from '@mui/icons-material';
import { Typography, Box, Stack, IconButton, CardMedia } from '@mui/material';
import React, {useState, useEffect, useContext} from 'react';
import ReactPlayer from 'react-player';
import {Link, useParams} from 'react-router-dom';
import { fetchAPI } from '../../utils/fetchAPI';
import Videos from './Videos';
import { VidContext } from '../Context/VidContext';
import {Helmet} from "react-helmet";

const VideoPage = () => {

  const {margin, getTimeAgo} = useContext(VidContext)

  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState();

  useEffect(() => {

    fetchAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data)=> setVideoDetail(data.items[0]));

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=> setVideos(data.items));
  }, [id]);

  function formatLikesCount(likes) {
    if (likes >= 1_000_000) {
      return (likes / 1_000_000).toFixed(1) + "M"; // 1_000_000 === 1000000 in JS( used for better viewing)
    } else if (likes >= 1000) {
      return (likes / 1000).toFixed(1) + "K";
    } else {
      return likes; // for numbers below 1000, return as is
    }
  }
   

    if (!videoDetail?.snippet) return 'Loading....';

    console.log(videoDetail)

  return (
    <Box minHeight={'95vh'}  sx={{ ml: margin ? '14rem' : '3.5rem'}}>
         <Helmet>
                <meta charSet="utf-8" />
                <title> {`${videoDetail?.snippet?.title}- StreamTube`}</title>
            </Helmet>
      <Stack direction={{xs: 'column', sm: 'row'}} sx={{gap: '0.5rem'}}
  
      >
        {/* single video box */}
      <Box flex={1}  > 
        <Box sx={{width: {sm: '100%', md:'45vw'},height: {sm: '100%', md:'25vh'}, top: '5.375rem', marginLeft: "1.5rem", marginTop: "0.5rem"
         }}>
          <ReactPlayer
         
          url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />

          <Typography color="white" variant='h6' p={2}>
            {videoDetail?.snippet?.title}
          </Typography>
          <Stack direction={"row"} justifyContent={"space-between"} sx={{
            color: "white"
          }} py={1} px={2}>
            <Stack direction={'row'} alignItems={'center'} gap={'0.5rem'}>
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
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
            <Typography variant={{sm: 'subtitle1', md: 'h6'}} sx={{fontFamily: 'Roboto'}} color='white'>
              {videoDetail?.snippet?.channelTitle}
     
            </Typography>
            </Link>
            
      <button className='subs-btn'>
     
    Subscribe
      </button>

            </Stack>
           
            <div 
            style={{
              display: 'flex',
              padding: 0,
              marginRight: '-1rem',
              gap: "0"
            }}
            >
         
      
                <button className='like-btn'>
                  <IconButton
                  sx={{
                    color: 'white',
                    gap: '0.5rem',
                    fontSize: '1.2rem',
                  
                  }}
                  > 
                 
                    <ThumbUpAltSharp />
                    {
                formatLikesCount(
                  videoDetail?.statistics?.likeCount
                )
               } 
                  </IconButton>
                </button>
                <button className='dislike-btn'>
                  <IconButton
                   sx={{
                    color: 'white',
                    gap: '0.5rem',
                    fontSize: '1.2rem',
                    
                  }}
                  >
                    <ThumbDownAltSharp />
                  </IconButton>
                </button>
             
        
            </div>

      
          </Stack>

           {/* info about video */}
           <Stack
        sx={{
          height: '8rem',
          backgroundColor: '#303030',
          borderRadius: '0.8rem',
          width: '97%',
          marginTop: '1rem',
          marginInline: '1rem'
        }}
        >
          <Stack
          direction={'row'}
          sx={{
            fontSize:' 0.6rem',
            color: 'white',
            fontWeight: "500",
            gap: '0.5rem',
            padding: '0.5rem',
            marginLeft: '0.5rem',
          }}
          >
                <Typography variant='body1' sx={{opacity: 0.8}}>
                {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
              </Typography>
            <Typography>
              {getTimeAgo(videoDetail?.snippet?.publishedAt)}
            </Typography>
          </Stack>
          <Typography
           sx={{
            fontSize:' 0.8rem',
            color: 'white',
            // fontWeight: "500",
            gap: '0.5rem',
            padding: '0.5rem',
            marginLeft: '0.5rem',
          }}
          >
            {videoDetail?.snippet?.description.slice(0,200)}..
          </Typography>
        </Stack>

        <Typography
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          color: 'white',
          fontWeight: 'light',
          fontSize: '0.9rem',
          paddingY: '2rem'
        }}
        >
          <span className='comments'>
            Comments are turned off. 
            <Link className='learn-more' to={"#"}> Learn more</Link>
          </span>
        </Typography>
        
        </Box>
               
      </Box>
      {/* suggested/recommended videos box */}
      <Box px={2} py={{md: 1, xs: 2}} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}       
      >
        <div
        className='recommended'
        >Suggested for you</div>
        
          <Videos videos={videos} direction="column"
          />
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoPage
