import React, { useState, useEffect, useContext } from "react";
import { Box, Stack } from "@mui/material";
import TopicBar from "../Topicbar/TopicBar";
import Videos from "../Videos/Videos";
import { fetchAPI } from "../../utils/fetchAPI";
import { VidContext } from "../Context/VidContext";
import {Helmet} from "react-helmet";

const Feed = () => {


  const {margin, setSelectedCategory, selectedCategory} = useContext(VidContext)

  const [videos, setVideos] = useState([]);

  useEffect(() => {
  
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ overflow: 'hidden', width: margin ? '84%' : '100%', flexDirection: "column",px: '1rem', ml: margin ? '14rem' : '3.5rem', }}>

            <Helmet>
                <meta charSet="utf-8" />
                <title>YouTube Clone</title>
            </Helmet>

      <Box>
        <TopicBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
    
      </Box>
      <Box py={'.0625rem'} px={".5rem"} sx={{ justifyContent:'center', alignItems:'center', overflowY: "auto", height: "95vh", }}>
        {/* <Typography variant="h5" mb={2} sx={{ color: "#ffffff" }}>
          <span style={{ color: "0f0f0f", fontWeight: 'lighter', fontSize: 'medium' }}>{selectedCategory} videos</span>
        </Typography> */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
