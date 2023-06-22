import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider, styled, createTheme } from '@mui/material/styles';
import { useContext, useState } from 'react';
import AppBar from "./AppBar.js";
import { ThemeContext } from "./theme.js";
import { useLocation } from "react-router-dom";
import { Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.background,
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    display: "flex",
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

export default function Details() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [jobData, setJobData] = useState({});
    const { state } = useLocation();
    const CountryStyle = {
        color: Theme[theme].primary,
        fontWeight: "bold",
        fontSize: "12px"
    }
    const data = state.data;

    return (
        <ThemeProvider theme={Theme[theme]}>
            <CustomBox>
                <AppBar search={false} data={state.data} />
                <Box sx={{ width: "100%", paddingBottom: "150px", marginTop: "150px", display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", paddingY: "30px", paddingX: {md: "70px", sm: "40px", xs: "20px"}, background: Theme[theme].cardColor, color: "black", width: {md: "60%", sm: "90%", xs: "90%"}, borderRadius: "10px", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", flexDirection: {md: "row", sm: "row", xs: "column", gap: "20px"}, width: "100%", justifyContent: "space-between", alignItems: "center" }}>

                            <Box>
                                <Box sx={{ display: "flex", gap: "10px", color: "grey", flexWrap: "wrap", paddingY: "10px" }}>
                                    {data["extensions"].map((value, index) => {
                                        if (index > 1) {
                                            return;
                                        }
                                        return (<Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "12px", paddingRight: "10px" }}>{value}</Typography>
                                            {(index !== 1) ? <FiberManualRecordIcon sx={{ fontSize: "5px" }} /> : ""}
                                        </Box>)

                                    })}
                                </Box>
                                <h3 style={{ color: Theme[theme].textColor }}>{data.title}</h3>
                                <Typography sx={CountryStyle}>{data["location"]}</Typography>

                            </Box>
                            <Box>
                                <Button variant="contained" sx={{ textTransform: "none", padding: "8px 30px", backgroundColor: theme.primary, "&:hover": { backgroundColor: theme.buttonHover } }}>Apply Now</Button>

                            </Box>
                        </Box>

                        <Box sx={{ paddingTop: "40px" }}>
                            <Typography sx={{ color: Theme[theme].textColor, opacity: 0.5, fontSize: "14px" }}>
                                {data.description}
                            </Typography>
                        </Box>
                        {data.job_highlights.map((value, index) => {
                            console.log(value)
                            return <Box sx={{ paddingTop: "60px" }}>
                                <h6 style={{ color: Theme[theme].textColor }}>{value.title}</h6>
                                <List dense={true}>
                                    {value.items.map((value2, index2) => {
                                        return <ListItem>
                                            <ListItemIcon sx={{ padding: 0, margin: 0 }}>
                                                <FiberManualRecordIcon sx={{ color: Theme[theme].textColor, opacity: 0.5, fontSize: "14px" }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={value2}
                                                sx={{ color: Theme[theme].textColor, opacity: 0.5, fontSize: "14px" }}
                                            />
                                        </ListItem>

                                    })}
                                </List>
                            </Box>

                        })}



                    </Box>
                </Box>
                <Box sx={{ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", bottom: 0, background: Theme[theme].cardColor, width: "100%", padding: "30px" }}>
                    <Box sx={{display: "flex", width: {md: "60%", sm: "90%", xs: "90%"}, height: "100%", alignItems: "center", justifyContent: "space-between"}}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <h6 style={{ color: Theme[theme].textColor }}>{data.title}</h6>
                            <Typography sx={{ color: "grey" }}>{data.company_name}</Typography>
                        </Box>
                        
                        <Button variant="contained" sx={{ textTransform: "none", padding: "8px 30px", height: "fit-content", backgroundColor: theme.primary, "&:hover": { backgroundColor: theme.buttonHover } }}>Apply Now</Button>

                    </Box>

                </Box>
            </CustomBox>
        </ThemeProvider>

    );
}

