import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, Grid } from '@mui/material';

const DeshBoard = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (todo.trim()) {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Header */}
            <Box
                sx={{
                    backgroundColor: '#3f51b5',
                    color: 'white',
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '98.3%',
                }}
            >
                <Typography variant="h6">Dashboard</Typography>
                <Typography variant="h6">Welcome, User</Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ display: 'flex', flex: 1 }}>
                {/* Sidebar */}
                <Box
                    sx={{
                        width: '250px',
                        backgroundColor: '#fff',
                        boxShadow: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 2,
                    }}
                >
                    <Sidebar>
                        <Menu>
                            <SubMenu label="Charts">
                                <MenuItem>Pie charts</MenuItem>
                                <MenuItem>Line charts</MenuItem>
                            </SubMenu>
                            <MenuItem>Documentation</MenuItem>
                            <MenuItem>Calendar</MenuItem>
                        </Menu>
                    </Sidebar>
                </Box>

                {/* To-Do List Section */}
                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        padding: 3,
                        boxShadow: 2,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        To-Do List
                    </Typography>
                    <TextField
                        label="Add a task"
                        variant="outlined"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: 2 }}
                        onClick={handleAddTodo}
                    >
                        Add Task
                    </Button>

                    <List sx={{ marginTop: 2 }}>
                        {todos.map((task, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={task} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default DeshBoard;
