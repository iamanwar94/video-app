import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "358px", md: "320px" },
      boxShadow: "none",
      borderRadius: 0,
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
      <Link to={`/video/${videoId}`}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`}>
        <Typography
          variant="subtitle2"
          color="gray"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          {snippet?.channelTitle}
          <CheckCircleIcon
            sx={{
              fontSize: "13px",
              color: "gray",
            }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
