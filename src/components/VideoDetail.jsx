import { CheckCircle } from '@mui/icons-material';
import { Typography, Box, Stack } from '@mui/material';
import React, {useState, useEffect, useContext} from 'react';
import ReactPlayer from 'react-player';
import {Link, useParams} from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import Videos from './Videos';
import { VidContext } from './VidContext';
import {Helmet} from "react-helmet";

const VideoDetail = () => {

  const {margin} = useContext(VidContext)

  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState();

  useEffect(() => {

    fetchAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data)=> setVideoDetail(data.items[0]));

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=> setVideos(data.items));
  }, [id]);
   

    if (!videoDetail?.snippet) return 'Loading....';

  return (
    <Box minHeight={'95vh'}  sx={{ ml: margin ? '14rem' : '3.5rem'}}>
         <Helmet>
                <meta charSet="utf-8" />
                <title> {`${videoDetail?.snippet?.title}- YouTube Clone`}</title>
            </Helmet>
      <Stack direction={{xs: 'column', sm: 'row'}}>
      <Box flex={1}>
        <Box sx={{width: {sm: '100%', md:'55vw'}, top: '5.375rem'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Typography color="white" variant='h5' p={2}>
            {videoDetail?.snippet?.title}
          </Typography>
          <Stack direction={"row"} justifyContent={"space-between"} sx={{
            color: "white"
          }} py={1} px={2}>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
            <Typography variant={{sm: 'subtitle1', md: 'h5'}} sx={{fontFamily: 'Roboto'}} color='white'>
              {videoDetail?.snippet?.channelTitle}
            </Typography>
            </Link>
            <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
              <Typography variant='body1' sx={{opacity: 0.8}}>
                {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
              </Typography>
              <Typography variant='body1' sx={{opacity: 0.8}}>
                {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box px={2} py={{md: 1, xs: 5}} justifyContent={'center'} alignItems={'center'}>
          <Videos videos={videos} direction="column" />
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
