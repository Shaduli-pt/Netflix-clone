import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Banner.css'

// function Banner(data) {
//   console.log(data.fetchurl);

function Banner({fetchurl}) {
  console.log(fetchurl);
  
  const image_base_url = "https://image.tmdb.org/t/p/original/";         //this link from notepad send by sullu sir
  const[movies,setMovies] = useState()
 
    const fetchData = async() => {
      const {data} = await instance.get(fetchurl)
      console.log("Api result");
      
      const res = data.results[Math.floor(data.results.length*Math.random())]   //data.results[2,98,5,14,3,19]  ,math.random cheythal 0-1 random select aavum (eg:0.256555,08222),so we add the lenght,ivide total length 20 und ,so   data.results.length*math.random ,   math.floor using foor removing decimal values so we get =2,8,19,1

      setMovies(res)
    }
  
  //useEffect

  // useEffect(() => {
  //     fetchData()                             adyam inganeyayirunnyu
  // },[])


  useEffect(() => {
    // setInterval(()=>{               //mukalile step change aaki ingane cheythu,for ehat? -> ingane cheyyunnath images auto slide cheyyanan,we use setintervel,mukalile stepil refresh aakumbol mathrame change aaku image,ippol nishchida smayath(what we fixed) automatically refresh aayi images change aakum.
    //   fetchData()
    // },4000)            //here 4000 refers 4s
    fetchData()
},[])

  return (
    <>
        <div style={{backgroundImage:`url(${image_base_url}${movies?.backdrop_path})`,height:"560px", backgroundSize:"cover",backgroundAttachment:"fixed"}}>
          <div className='banner_content'>
              <h2 style={{color:"white"}}>{movies?.name}</h2>      {/*ee .name  api listil movies names koduthittullath name enna key laan.so we called .name for getting moves names  api-https://api.themoviedb.org/3/discover/tv?api_key=47de2b9e8b2462b53975d18185ac40bf&with_networks=213   - this link get from notes send by sullu sir */}
              <button className='btn btn-danger'>PLAY <i className="fa-solid fa-play ms-2"></i></button>    {/* <i class> converted to  <i className>  for adding boostrap css in it. each class & className works for an icon */}
              <button className='btn btn-outline-light ms-3'>MORE INFO <i className="fa-solid fa-caret-down ms-2"></i></button>
              {/* <h4 style={{color:"white",fontSize:"18px",fontWeight:"600",width:"350px"}} className='mt-3'>{movies?.overview}</h4> */}
              <h4 className='mt-3 text-light'>{movies?.overview?.slice(0,200)}....</h4>    {/* ivede from 0 start aayi 200 charecter aavumbo cut aakum   etc kanikkan ... ittu */}
          </div>
        </div>
    </>
  )
}

export default Banner
