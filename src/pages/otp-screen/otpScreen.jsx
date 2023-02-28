import React from "react";
import Button from "@mui/material/Button";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Controller, useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import { FormHelperText } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const OtpScreen = () => {
    const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data) => {
    navigate('/home');
  };

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
        <Typography variant="h5">OTP</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: 2,
              justifyContent: "space-evenly",
              minHeight: 250,
            }}
          >
            <Controller
              name="otp"
              control={control}
              rules={{ validate: (value) => value.length === 6 }}
              render={({ field, fieldState }) => (
                <>
                  <MuiOtpInput sx={{ gap: 1 }} {...field} length={6} />
                  {fieldState.invalid ? (
                    <FormHelperText error>OTP invalid</FormHelperText>
                  ) : null}
                </>
              )}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default OtpScreen;
