import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import Card from "./Card.js"
import "./theme.css";

export default function CardList() {
  const [data, setData] = useState([]);
  const [page, setCurrentPage] = useState(0);
  const url = "https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_jobs&api_key=13250787aca12dd30410c232e0e61ece9cbd28061a9276b0e74e82e77c9fa7dc&q=developer&start=" + page * 10;


  const fetchUserData = () => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(da => {
        let d = JSON.parse(JSON.stringify(da));
        console.log(d["jobs_results"]);
        // setData(d);

        setData([...data, ...d["jobs_results"]]);
      })
  }


  const nextPage = () => {
    setCurrentPage(page+1);
  }

  useEffect(() => {
    fetchUserData();
  }, [page])


  return (
    <div className='container pt-5 justify-content-center'>
      <div className='row'>
        {data.map((value, index) => {
          console.log(value);
          return <Card key={index} data={value} />
        })}
      </div>
      <div className='row justify-content-center pt-5'>
        <button className='btn buttom-theme' style={{width: "fit-content"}} onClick={nextPage}>load more</button>

      </div>

    </div>
  );
}