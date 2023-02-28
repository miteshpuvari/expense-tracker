import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { json, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (values) => {
      localStorage.setItem('isLogin', true);
      localStorage.setItem('userEmail', values.email);
      navigate('/otp_screen');
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": {
          m: 10,
          width: 500,
          height: 300,
          textAlign: "center",
        },
      }}
    >
      <Paper>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: 2,
              justifyContent: "space-evenly",
              minHeight: 250,
            }}
          >
            <TextField
              id="email"
              label="email"
              type="email"
              helperText={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              helperText={formik.touched.password && formik.errors.password}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
