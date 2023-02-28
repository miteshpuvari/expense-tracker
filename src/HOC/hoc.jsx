import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import Header from "../components/header/Header";

const Hoc = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.5}>
        <Grid item xs={12} sx={{ backgroundColor: "#808080" }}>
          <Header />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Grid xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hoc;
