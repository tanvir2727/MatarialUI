import React, { useState } from 'react';
import { Box, Grid, TextField, Button, createTheme, ThemeProvider } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";

import imageSrc from "../assets/tree.png";

const theme = createTheme();

theme.typography.h3 = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

theme.typography.p = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '0.5rem',
    '@media (min-width:600px)': {
        fontSize: '0.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
};

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        navigate('/signin');
    }

    return (
        <Box sx={{ mt: 0 }}>
            <Grid
                container
                spacing={0} // Remove the spacing between items
                justifyContent="center"
                alignItems="stretch" // Stretch to full height
                sx={{ height: "100vh", width: "100vw" }} // Full height and width of the screen
            >
                {/* Form Section */}
                <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <Box mb={3} mr={7}>

                        <ThemeProvider theme={theme}>
                            <Typography variant="p" sx={{ textAlign: "start" }}>Start Your Journey</Typography>
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                            <Typography variant="h3" sx={{ textAlign: "start" }}>Sign Up to InsideBox</Typography>
                        </ThemeProvider>

                    </Box>

                    <Box  component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, width: "40%" }}>
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            required
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <TextField id="email" label="Email" variant="outlined" type="email" required fullWidth value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <TextField id="password" label="Password" variant="outlined" type="password" required fullWidth value={password} onChange={(e)=> setPassword(e.target.value)} />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginTop: 2, width: "100%", height: 48 }}
                            type="submit"
                            size="small"
                        >
                            Sign up
                        </Button>
                    </Box>

                    <Box sx={{ position: "absolute", bottom: 0, left: 0, padding: 2, display: "flex", alignItems: "center" }}>
                        <Typography variant="body1" sx={{ fontFamily: "'Roboto', sans-serif", marginRight: 1 }}>
                            Have An Account ?
                        </Typography>
                        <Typography
                            component={Link}
                            to="/signin"
                            sx={{
                                fontFamily: "'Roboto', sans-serif",
                                color: "primary.main",
                                textDecoration: "none",
                                "&:hover": { textDecoration: "underline" }
                            }}
                        >
                            Sign in
                        </Typography>
                    </Box>
                </Grid>

                {/* Image Section */}
                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img
                        src={imageSrc}
                        alt="Preview"
                        style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Grid>
            </Grid>
        </Box>


    );
}
export default SignUp;