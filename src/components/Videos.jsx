import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction, loading }) => {
  if (loading) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos && videos.length ? (
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))
      ) : (
        <Box>
          <Typography variant="subtitle1">No videos found</Typography>
        </Box>
      )}
    </Stack>
  );
};

export default Videos;
