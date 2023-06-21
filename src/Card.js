import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./card.css";
import "./theme.css"
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from "react-router-dom";


export default function Card({ data }) {
    const theme = useTheme();
    const BoxStyle = {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "40px",
        borderRadius: "5px",
        padding: "20px",
        backgroundColor: theme.cardColor,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: theme.hoverColor
        }
    }

    const CountryStyle = {
        color: theme.primary,
        fontWeight: "bold",
        fontSize: "12px"
    }

    return (
        <Link to={{ pathname: "/details" }} state={{ "data": data }} style={{ textDecoration: "none" }}>
            <Box sx={BoxStyle}>
                <Box>
                    <Box
                        component="img"
                        sx={{
                            position: "absolute",
                            height: 40,
                            width: 40,
                            borderRadius: "10px",
                            marginTop: "-40px", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                        }}
                        alt=""
                        src={data["thumbnail"] ? data["thumbnail"] : "https://previews.123rf.com/images/urfandadashov/urfandadashov1804/urfandadashov180400262/99679816-world-placeholder-company-logo-design-template-business-corporate-vector-icon.jpg"}
                    ></Box>
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

                    <h6 style={{ color: theme.primary, }}>{data["title"]}</h6>
                    <Typography sx={{ color: "grey", fontSize: "12px" }}>{data["company_name"]}</Typography>
                </Box>
                <Typography sx={CountryStyle}>{data["location"]}</Typography>

            </Box>
        </Link>
    );
}