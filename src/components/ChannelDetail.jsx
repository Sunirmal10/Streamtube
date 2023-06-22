import { Box } from '@mui/material'
import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchAPI } from '../utils/fetchAPI'
import { randomColor } from './Functions'
import { VidContext } from './VidContext'
import {Helmet} from "react-helmet";


const ChannelDetail = () => {
  
  const {margin} = useContext(VidContext)

  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  useEffect(() => {
    
  
      fetchAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]));

      fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));

  }, [id])
  

  const ranHexCode = randomColor;

  return (

    <Box minHeight={'95vh'} sx={{ overflowX:'hidden', ml: margin ? '14rem' : '3.5rem'}}>

<Helmet>
                <meta charSet="utf-8" />
                <title>{`${channelDetail?.snippet?.title} - YouTube Clone`}</title>
            </Helmet>

      <Box>
     <div style={{
       background: ranHexCode, zIndex: 100, height: '15.75rem', width: '100%'
      }}/>
      <ChannelCard channelDetail={channelDetail}
      marginTop = '-6.875rem'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '3.4375rem'}}}/>
          <Videos videos={videos} />
     
      </Box>
    </Box>
  )
}

export default ChannelDetail
