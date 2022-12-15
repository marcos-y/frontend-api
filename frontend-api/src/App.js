import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Components/Card'

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('https://api.tvmaze.com/search/shows?q=star%20wars')
        .then(res => {
          setMovies(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getMovies()
  }, [])

  return (
    <div style={{ backgroundColor: '#223C53' }}>
      <h1 style={{ padding:'40px', fontFamily:'roboto', margin:'auto', color:'white', textAlign:'center'}}>Mis Películas</h1>
      <div style={{ padding:'10px', margin:'auto', maxWidth:'1200px', display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
      {
        movies.map((movie) => {
          return (
            <Card
              key={movie.show.id}
              name={movie.show.name}
              image={movie.show.image.medium}
              summary={movie.show.summary}
              language={movie.show.language}
              genres={movie.show.genres}
              premiered={movie.show.premiered}
              rating={movie.show.rating.average}
            />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
