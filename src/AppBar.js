import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function AppBar() {
    const theme = useTheme();
    const boxStyle = {
        width: "100%",
        backgroundColor: theme.primary,
        padding: "40px",
        borderBottomLeftRadius: "50px",
        color: "white"
    }

    const switchStyle = {
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: "white",
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: "white",
        },
    }


    return (
        <Box sx={boxStyle}>
            <Box sx={{ paddingLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5">devjobs</Typography>
                <Box>
                    <LightModeIcon />
                    <Switch sx={switchStyle} />
                    <DarkModeIcon/>
                </Box>

            </Box>
        </Box>

    );
}