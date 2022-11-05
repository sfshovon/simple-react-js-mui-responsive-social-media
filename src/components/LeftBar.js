import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import OnlineFriends from './OnlineFriends';
import LP1 from '../assets/images/LP1.jpg'
import LP2 from '../assets/images/LP2.jpg'
import LP3 from '../assets/images/LP3.jpg'



const LeftBar = () => {

  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('users.json')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <Box flex={2} p={2} sx={{ display: {xs: "none", sm: "block"} }}>
      <Box position="fixed" width={315}>

        <Typography variant="h6" fontWeight={400}> Active Friends </Typography>
        <AvatarGroup max={8}>
        {
          users.map(user => 
          <OnlineFriends
            user={user} 
            key={user.id}>
          </OnlineFriends>
          )
        }
        </AvatarGroup>

        <Typography variant="h6" fontWeight={400} mt={2} mb={2}> Recent Photos </Typography>
        <ImageList cols={3} rowHeight={100} gap={8}>
          <ImageListItem>
            <img
              src={LP1}
              alt="Latest Img"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={LP2}
              alt="Latest Img"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={LP3}
              alt="Latest Img"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={400} mt={2}> Recent Conversations </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="PH" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhcwzoKvwLO2ex6arjKpso8UH9zxHKpC9L9xr2yMmnJ3jrCR8rIe0RnJrMKjPTn_lI6U&usqp=CAU" />  
            </ListItemAvatar>
            <ListItemText
              primary="Programming Hub"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Tamema Jahan
                  </Typography>
                  {" — Hey I'm facing error in installing Material UI..."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="BP" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20HhRtugmJoRlQ46S2wgSV9i2heVXWLz5hw&usqp=CAU" />
            </ListItemAvatar>
            <ListItemText
              primary="BBQ Party"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                   Shahriar to Fariha, Jannat
                  </Typography>
                  {" — I'll pick up, be ready by 7:00 PM sharp…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="FF" src="https://i.pinimg.com/736x/51/5e/ed/515eed2e3701d135a33a0be5ac493941.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Football Freaks"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Mahir Absar
                  </Typography>
                  {" — Have you seen Messi scoring from freekick lastnight? Damn! It was eyesoothing…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

      </Box>
    </Box>
  );
};

export default LeftBar;