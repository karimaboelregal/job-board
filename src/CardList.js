import { useState, useEffect } from 'react';
import Card from "./Card.js"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


export default function CardList({ search }) {
    const [data, setData] = useState([]);
    const [page, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const url = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_jobs&api_key=13250787aca12dd30410c232e0e61ece9cbd28061a9276b0e74e82e77c9fa7dc&q=" + (search === "" ? "developer" : search) + "&start=" + page * 10;
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
        fetchUserData();
        setLoading(true);
    }, [page])

    useEffect(() => {
        setData([]);
        setLoading(true);
    }, [search])

    useEffect(() => {
        if (data.length === 0) {
            fetchUserData();
            setLoading(true);
        }
    }, [data])

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", width: "100%", alignItems: "center", paddingTop: "100px" }}>
            <Grid container spacing={5} gap={0.1} justifyContent={"center"} >
                {data.map((value, index) => {

                    return <Grid key={index} item xs={5} md={3} >
                        <Card data={value} />
                    </Grid>

                })}
            </Grid>
            {loading?<CircularProgress />:""}

            <Button variant="contained" onClick={nextPage} sx={{ backgroundColor: theme.primary, "&:hover": { backgroundColor: theme.buttonHover } }}>Load More</Button>
        </Box>
    );
}