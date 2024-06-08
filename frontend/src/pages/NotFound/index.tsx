import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        textAlign: "center",

        padding: "20px",
      }}
    >
        <img src="/logo.svg" alt="logo" />
      <Typography variant='h1' component='h1' gutterBottom>
        404
      </Typography>
      <Typography variant='h5' component='p' gutterBottom>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button variant='contained' color='primary' onClick={handleGoHome}>
        Go to Home
      </Button>
    </Box>
  );
};
