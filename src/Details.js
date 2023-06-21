import './App.css';
import Box from '@mui/material/Box';
import { ThemeProvider, styled, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import AppBar from "./AppBar.js";
import { useParams } from 'react-router-dom';

const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.background,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",


}));


const lightTheme = createTheme({
    background: "#f4f6f8",
    primary: "#5964E0",
    cardColor: "#ffffff",
    buttonHover: "#939bf4",
    hoverColor: "#FCFCFF"
});


const DarkTheme = createTheme({
    background: "#f4f6f8",
    primary: "#5964E0",
    cardColor: "#ffffff",
    buttonHover: "#939bf4",
    hoverColor: "#FCFCFF"

});


export default function Details(state) {
    const [cTheme, setTheme] = useState(lightTheme);

    console.log(state);



    return (
        <ThemeProvider theme={cTheme}>
            <CustomBox>
                <AppBar />

            </CustomBox>
        </ThemeProvider>
    );
}

