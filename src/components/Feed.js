import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    fetch('posts.json')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <Box flex={4} p={2}>
      {
        posts.map(post => 
        <Post
          post={post} 
          key={post.id}>
        </Post>
        )
      }
    </Box>
  );
};

export default Feed;