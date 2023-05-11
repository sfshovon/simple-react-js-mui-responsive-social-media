import { Notifications } from '@mui/icons-material';
import Mail from '@mui/icons-material/Mail';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import myImg from '../assets/images/me.jpg';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "honeydew",
  color: "black",
  padding: "5px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }

}))

const Navbar = () => {
  const [open,setOpen] = useState(false);
  
  return (
    <AppBar position="sticky" sx={{backgroundColor: "darkcyan"}}> 
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: {xs: "none", sm: "block"} }}>Conneting Hub</Typography>
        <PeopleAltIcon sx={{ display: {xs: "block", sm: "none"} }}></PeopleAltIcon>
        <Search>
          <InputBase sx={{color: "black", fontSize: "18px"}} placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={8} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={100} color="error">
            <Notifications></Notifications>
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src={myImg} onClick={ e => setOpen(true)}></Avatar>
        </Icons>
        {/* Only Applicable For Small Devices */}
        <UserBox onClick={ e => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src={myImg}>
          </Avatar>
          <Typography>Shahriar</Typography>
        </UserBox>
        {/* Only Applicable For Small Devices */}
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem> Profile </MenuItem>
        <MenuItem> My Account </MenuItem>
        <MenuItem> Logout </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;