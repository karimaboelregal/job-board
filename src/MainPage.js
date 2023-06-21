import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CardList from "./CardList.js";
import Box from '@mui/material/Box';
import { ThemeProvider, styled, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import AppBar from "./AppBar.js";

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


export default function MainPage() {
  const [cTheme, setTheme] = useState(lightTheme);




  return (
    <ThemeProvider theme={cTheme}>
      <CustomBox>
        <AppBar />
        <Box sx={{ width: { md: "80%", sm: "90%" } }}>
          <CardList />
        </Box>
      </CustomBox>
    </ThemeProvider>
  );
}

