import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'


function Row({title,fetchurl}) {

  const image_base_url = 'https://image.tmdb.org/t/p/original/'
  const [allMovies, setAllMovies] = useState()

  const fetchData = async() => {
    console.log("title");
    console.log(title);
    console.log(fetchurl);
    
    const response = await instance.get(fetchurl);
    console.log("Api result");
    console.log(response); 
    
    setAllMovies(response.data.results)                         //data.results from api link
  }
  useEffect(() => {
    fetchData()
  },[])
  
  console.log("all movies",allMovies);
  
  
  return (
    <>
      <div className="row mt-3">
        <h3>{title}</h3>
        <div className="movie_row">
         {
          allMovies?.map(item=>(
            
             <img className='movies' src={`${image_base_url}${item?.poster_path}`} alt=""/>
          ))
         }
        </div>
      </div>
    </>
  )
}

export default Row