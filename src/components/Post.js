import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Post = ({post}) => {
  return (
    <Card sx={{margin: 3}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "skyblue", padding: "2px"}} aria-label="recipe">
            {post.initial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title={post.name}
        subheader={post.date}
      />
      <CardMedia
        component="img"
        height="10%"
        image={post.pic}
        alt={post.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;