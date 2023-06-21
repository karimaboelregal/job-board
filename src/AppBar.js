import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext } from "./theme";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Checkbox from '@mui/material/Checkbox';

export default function AppBar({ search, data, setSearch, setLocationSearch }) {
    const { theme, setTheme } = useContext(ThemeContext);

    const themeData = useTheme();
    const boxStyle = {
        width: "100%",
        backgroundColor: themeData.primary,
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

    const changeTheme = () => {
        setTheme((theme === "lightTheme") ? "darkTheme" : "lightTheme");
    }
    console.log(data);
    return (
        <Box sx={boxStyle}>
            <Box sx={{ paddingLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5">devjobs</Typography>
                <Box>
                    <LightModeIcon />
                    {theme === "lightTheme" ? <Switch sx={switchStyle} onClick={changeTheme} /> : <Switch defaultChecked sx={switchStyle} onClick={changeTheme} />}
                    <DarkModeIcon />
                </Box>
            </Box>
            {search ? <InputGroup setLocationSearch={setLocationSearch} theme={themeData} setSearch={setSearch} /> : <OffsetBar picture={data.thumbnail} name={data.company_name} cLink={data.related_links[0].text} theme={themeData} />}
        </Box>

    );
}

function InputGroup({ theme, setSearch, setLocationSearch }) {

    const [searchV, setSearchV] = useState("");
    const [locationSearch, setLocationSearchh] = useState("");
    const submitSearch = () => {
        setSearch(searchV);
        setLocationSearch(locationSearch);
    }

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ position: "absolute", height: "70px", display: "flex", background: theme.cardColor, alignItems: "center", color: "black", width: { "md": "60%", sm: "80%" }, borderRadius: "10px" }}>
                <Box sx={{ width: {"md": "40%", sm: "33%"}, display: "flex", borderRight: "1px solid", borderColor: theme.textColor, marginLeft: "10px" }}>
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <SearchIcon sx={{ color: theme.primary }} />
                    </IconButton>
                    <InputBase
                        onChange = {(v) => {setSearchV(v.target.value)}}
                        sx={{  color: theme.textColor }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />

                </Box>
                <Box sx={{ width: {"md": "30%", "sm": "33%"}, display: "flex", borderRight: "1px solid", borderColor: theme.textColor, marginLeft: "10px" }}>
                    <LocationOnIcon sx={{ color: theme.primary }} />
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: theme.textColor }}
                        onChange = {(v) => {setLocationSearchh(v.target.value)}}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />

                </Box>
                <Box sx={{ display: "flex", width: {"md": "30%", "sm": "33%"}, paddingLeft: "20px", justifyContent: "space-around" }}>
                    <FormControlLabel
                        sx={{ color: theme.textColor }}

                        label="Full Time"
                        control={
                            <Checkbox sx={{color: theme.textColor}}/>
                        } />
                    <Button variant="contained" onClick={submitSearch} sx={{ backgroundColor: theme.primary, "&:hover": { backgroundColor: theme.buttonHover } }}>Search</Button>

                </Box>


            </Box>
        </Box>
    );
}




function OffsetBar({ picture, name, cLink, theme }) {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box sx={{ position: "absolute", display: "flex", background: theme.cardColor, alignItems: "center", color: "black", width: "60%", borderRadius: "10px", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
                    <img alt="pic" src={picture === undefined ? "https://previews.123rf.com/images/urfandadashov/urfandadashov1804/urfandadashov180400262/99679816-world-placeholder-company-logo-design-template-business-corporate-vector-icon.jpg" : picture} width={100} height={100} />
                    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <h6 style={{ color: theme.textColor }}>{name}</h6>
                        <span style={{ color: "grey", fontSize: "14px" }}>{cLink}</span>

                    </Box>
                </Box>
                <Box sx={{ display: "flex", height: "100%", alignItems: "center", paddingRight: "40px" }}>
                    <Button variant="contained" sx={{ height: "fit-content", padding: "12px 25px", textTransform: "none", backgroundColor: theme.detailsButton, color: theme.detailsButtonColor, "&:hover": { backgroundColor: theme.detailsButtonHover } }}>Company site</Button>

                </Box>

            </Box>
        </Box>
    )
}