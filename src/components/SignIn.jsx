import React, { useState } from 'react';
import { Box, TextField, Button, } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import imageSrc from "../assets/see.png"; // Assuming the image is in the assets folder

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    // Validation: Check if fields are empty
    let isValid = true;
    if (!email) {
      setEmailError(true);
      isValid = false;
    }
    if (!password) {
      setPasswordError(true);
      isValid = false;
    }

    if (!isValid) return;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/dashboard');
    } else {
      // Show an error message
      alert('Invalid credentials');
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundPosition: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          color: "white",
          padding: 3,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          borderRadius: 2,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: { xs: "80%", sm: "400px" },
          height: {xs: "40%", sm:"500px"} // Responsive width
        }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          error={emailError}
          helperText={emailError ? "Email is required" : ""}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          error={passwordError}
          helperText={passwordError ? "Password is required" : ""}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ height: 48 }}>
          Sign In
        </Button>
      </Box>
    </Box>
  );
}

export default SignIn;
