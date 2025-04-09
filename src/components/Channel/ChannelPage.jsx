import { Box } from '@mui/material'
import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Videos from '../Videos/Videos'
import ChannelCard from './ChannelCard'
import { fetchAPI } from '../../utils/fetchAPI'
import { randomColor } from '../../utils/Functions'
import { VidContext } from '../Context/VidContext'
import {Helmet} from "react-helmet";


const ChannelPage = () => {
  
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
                <title>{`${channelDetail?.snippet?.title} - StreamTube`}</title>
            </Helmet>

      <Box
      sx={{
     
        marginInline: '0.8rem',
      }}
      >
     <div style={{
       background: ranHexCode, zIndex: 100, height: '10.75rem', width: '100%',
    borderRadius: '1.5rem',
 
      }}/>
   
      <ChannelCard channelDetail={channelDetail}
      />

   
      </Box>
      {/* home, videos, shorts .... tabs */}
      <div
      style={{
        display: 'flex',
        height: '2.5rem',
        justifyContent: 'flex-start',
        color: 'gray',
        paddingTop: '2rem',
        paddingLeft: '1.2rem',
        marginRight: '0.2rem',
        marginLeft: '2rem',
        gap: '1.5rem',
        fontSize: '1.2rem',
        fontFamily: 'Arial, Helvetica, sans-serif',
        borderBottom: '1px solid gray',
        marginBottom: '2rem'
      }}
      >
        <span className='channel-tab channel-tab-active'>Home</span>
        <span className='channel-tab'>Videos</span>
        <span className='channel-tab'>Shorts</span>
        <span className='channel-tab'>Playlists</span>
      </div>
      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '3.4375rem'}}}/>
          <Videos videos={videos} />
     
      </Box>
    </Box>
  )
}

export default ChannelPage
