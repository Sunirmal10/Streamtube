import React, { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchAPI } from "../utils/fetchAPI";
import { useParams } from "react-router-dom";
import { VidContext } from "./VidContext";
import { Helmet } from "react-helmet";

const SearchFeed = () => {
  const { margin } = useContext(VidContext);

  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box
      py={1}
      px={1}
      sx={{
        overflowY: "auto",
        height: "95vh",
        flexWrap: "wrap",
        ml: margin ? "14rem" : "3.5rem",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{searchTerm `- YouTube Clone`}</title>
      </Helmet>
      <Typography
        variant="h5"
        mb={2}
        sx={{ color: "#ffffff", px: "1rem", fontSize: ".825rem" }}
      >
        Showing results for
        <span
          style={{ color: "0f0f0f", fontWeight: "bold", fontStyle: "italic" }}
        >
          {" "}
          {searchTerm}
        </span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
