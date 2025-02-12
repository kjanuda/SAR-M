import React, { useState } from "react";
import { Button, Grid, Input, Typography } from "@mui/material";

const UseForm = (props) => {
    const [formData, setFormData] = useState({ id: '', name: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        // You can call props.onSubmit(formData) here if you pass a function from the parent component
    };

    return (
        <Grid 
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                padding: '20px',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000', fontSize: '24px' }}>
                    User Form
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '400px' }}
                    value={formData.id}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                    component={'label'}
                    htmlFor="name"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                    }}
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '400px' }}
                    value={formData.name}
                    onChange={handleChange}
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                    sx={{
                        display: 'block',
                        margin: '20px auto',
                        backgroundColor: '#009de6',
                        color: '#000000',
                        '&:hover': {
                            opacity: 0.7,
                            backgroundColor: '#009de6',
                        },
                    }}
                    onClick={handleSubmit}
                >
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}

export default UseForm;
