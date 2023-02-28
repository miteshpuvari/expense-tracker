import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

const logOut = () => {
  localStorage.setItem('isLogin', false);
  navigate('/');
}

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography variant="h5">Expense Tracker</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Tooltip title="Log out">
          <Avatar onClick={() => logOut()} >M</Avatar>
        </Tooltip>
          <Typography>{email}</Typography>
      </Box>
    </Box>
  );
};

export default Header;
