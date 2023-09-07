import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { makeApiRequest } from "../utils/Axios";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setVideos(null);
    setLoading(true);

    makeApiRequest(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      console.log("loading => data resp", data);
      if (data && data.items && data.items.length) {
        setVideos(data.items);
        setLoading(false);
      }
    });
  }, [selectedCategory]);

  const getVideos = async () => {};

  useEffect(() => {
    console.log("loading => videos", videos);
  }, [videos]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2023 Anwar Ahmed
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          color="white"
          // sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} loading={loading} />
      </Box>
    </Stack>
  );
};

export default Feed;
