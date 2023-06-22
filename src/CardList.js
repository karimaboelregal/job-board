import { useState, useEffect } from 'react';
import Card from "./Card.js"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';


export default function CardList({ search, location }) {
    const [data, setData] = useState([]);
    const [page, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const url = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_jobs&api_key=4b8a2f9267c6f59fffe493f338e08124023d33b0fc833153a390503b9010a375&q=" + (search === "" ? "developer" : search) + "&location="+location+"&start=" + page * 10;
    const theme = useTheme();

    const fetchUserData = () => {
        fetch(url)
            .then(response => {

                return response.json()
            })
            .then(async da => {
                let d = JSON.parse(JSON.stringify(da));
                let results = await d["jobs_results"];
                if (results !== undefined) {
                    setData([...data, ...results]);
                    setLoading(false);
                }
            })
    }


    const nextPage = () => {
        setCurrentPage(page + 1);
    }

    useEffect(() => {
        if (page !== 0) {
            fetchUserData();
            setLoading(true);    
        }
    }, [page])

    useEffect(() => {
        setData([]);
        setLoading(true);
    }, [search, location])

    useEffect(() => {
        if (data.length === 0) {
            // setData(JSON.parse(localStorage.getItem("data")))
            fetchUserData();
            setLoading(true);
        }
    }, [data])

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", width: "100%", alignItems: "center", paddingTop: "100px" }}>
            <Grid container spacing={5} gap={0.1} justifyContent={"center"} >
                {data.map((value, index) => {

                    return <Grid key={index} item xs={10} sm={5} md={3} >
                        <Card data={value} />
                    </Grid>

                })}
            </Grid>
            {loading?<CircularProgress />:""}

            <Button variant="contained" onClick={nextPage} sx={{ backgroundColor: theme.primary, "&:hover": { backgroundColor: theme.buttonHover } }}>Load More</Button>
        </Box>
    );
}