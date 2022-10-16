import type { NextPage } from 'next'
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';

const DivSetter = styled.div`
  width: 33%;
  margin: 0 auto;
  background-color: red;
`

const Home: NextPage = () => {
  const API_KEY = '932d3f145b7523c98e9a37bf45ac73bc';
  const getData = async() =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)
    return res.data.results;
  }
  const { data , isLoading , isError } = useQuery('Moive',getData)
  if(isLoading){
    return <h4>Loading...</h4>
  }
  if(isError){
    return <h4>where is error</h4>
  }
  const currentMapData = data.map((res:any) => (
    <DivSetter>
      <img src={`https://image.tmdb.org/t/p/w200/${res.poster_path}`}/>
      <p>{res.title}</p>
      <p>{res.release_date}</p>
      <p>{res.overview}</p>
    </DivSetter>
  ))
  
  return (
    <div>
      {currentMapData}
    </div>
  )
}

export default Home
