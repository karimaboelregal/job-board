import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CardList from "./CardList.js";
import Box from '@mui/material/Box';
import { ThemeProvider, styled, createTheme } from '@mui/material/styles';
import { useContext, useState } from 'react';
import AppBar from "./AppBar.js";
import { ThemeContext } from "./theme.js";

const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.background,
    width: "100%",
    height: "100%",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",


}));



const Theme = {
    "lightTheme": createTheme({
        background: "#f4f6f8",
        primary: "#5964E0",
        cardColor: "#ffffff",
        buttonHover: "#939bf4",
        hoverColor: "#FCFCFF",
        textColor: "black",
        detailsButton: "rgba(89,100,224,0.1)",
        detailsButtonHover: "rgba(89,100,224,0.35)",
        detailsButtonColor: "#5964E0"
    }),
    "darkTheme": createTheme({
        background: "#121721",
        primary: "#5964E0",
        cardColor: "#19202D",
        buttonHover: "#939bf4",
        hoverColor: "#121728",
        textColor: "white",
        detailsButton: "rgba(255,255,255,0.1)",
        detailsButtonHover: "rgba(255,255,255,0.35)",
        detailsButtonColor: "white"


    })
}




export default function MainPage() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [searchV, setSearchV] = useState("");

    return (
        <ThemeProvider theme={Theme[theme]}>
            <CustomBox>
                <AppBar search={true} setSearch={setSearchV}/>
                <Box sx={{ width: { md: "80%", sm: "90%" } }}>
                    <CardList search={searchV}/>
                </Box>
            </CustomBox>
        </ThemeProvider>
    );
}

