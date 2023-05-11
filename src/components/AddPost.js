import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import myImg from '../assets/images/me.jpg';

const StyledModal = styled(Modal)({
  display: "flex", 
  justifyContent: "center",
  alignItems: "center"
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddPost = () => {
 const [open,setOpen] = useState(false);

  return (
    <>
      <Tooltip 
        onClick={e => setOpen(true)}
        title="Delete" 
        sx={{position:"fixed", bottom: 20, right:{xs:"calc(35% + 25px)", md:30} }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon/>
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={280} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
          <UserBox>
            <Avatar
              src={myImg}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500}>
              Shahriar Ferdous Shovon
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            sx={{width:"100%"}}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;