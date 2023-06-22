import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';



export default function CustomModal({ open, handleClose, setLocationSearchh }) {
    const theme = useTheme();
    const [search, setSearch] = useState("");

    const submitSearch = () => {
        setLocationSearchh(search);
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "90%",
        color: theme.textColor,
        bgcolor: theme.cardColor,
        boxShadow: 24,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        pt: 2,
        pb: 3,
        px: 1,
    };
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style }}>
                    <Box sx={{ display: "flex", width: "100%", borderBottom: "1px solid grey" }}>
                        <LocationOnIcon sx={{ color: theme.primary }} />
                        <InputBase
                            sx={{ ml: 1, flex: 1, color: theme.textColor }}
                            onChange={(v) => { setSearch(v.target.value) }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", width: "100%" }}>
                        <FormControlLabel
                            sx={{ color: theme.textColor }}

                            label="Full Time"
                            control={
                                <Checkbox sx={{ color: theme.textColor }} />
                            } />

                    </Box>
                    <Box sx={{ display: "flex", width: "100%" }}>
                        <Button variant="contained" sx={{ width: "100%" }} onClick={submitSearch}>Apply</Button>
                    </Box>

                </Box>
            </Modal>
        </React.Fragment>
    );
}