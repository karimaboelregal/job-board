import { useState, useEffect } from 'react';
import Card from "./Card.js"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


export default function CardList() {
  const [data, setData] = useState([]);
  const [page, setCurrentPage] = useState(0);
  const url = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_jobs&api_key=13250787aca12dd30410c232e0e61ece9cbd28061a9276b0e74e82e77c9fa7dc&q=developer&start=" + page * 10;
  const theme = useTheme();

  const fetchUserData = () => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(da => {
        let d = JSON.parse(JSON.stringify(da));
        // console.log(d["jobs_results"]);
        // setData(d);

        setData([...data, ...d["jobs_results"]]);
      })
  }


  const nextPage = () => {
    setCurrentPage(page + 1);
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
    // fetchUserData();
  }, [page])

  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
  // }, [data])

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", width: "100%", alignItems: "center", paddingTop: "100px" }}>
      <Grid container spacing={5} alignItems="stretch">
        {data.map((value, index) => {

          return <Grid item xs={6} md={4} >

            <Card key={index} data={value} />
          </Grid>

        })}
      </Grid>
      <Button variant="contained" onClick={nextPage} sx={{ backgroundColor: theme.primary, "&:hover": { backgroundColor: theme.buttonHover } }}>Load More</Button>
    </Box>
    // <div className='container pt-5 justify-content-center'>
    //   <div className='row'>
    //   </div>
    //   <div className='row justify-content-center pt-5'>
    //     <button className='btn buttom-theme' style={{width: "fit-content"}} onClick={nextPage}>load more</button>

    //   </div>

    // </div>
  );
}