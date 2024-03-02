// import React from "react";
// import Home from "./Home";
// import PuffLoader from "react-spinners/PuffLoader";
// import { useState,useEffect } from "react";
// const Loader=()=>
// {
//     const [loading,setloading]=useState(false);
//    useEffect(()=>
//    {
//     setloading(true)
//     setTimeout(()=>{
//     setloading(false);
//     },5000)
//    },[])
//     return(
//         <div className="pre-loader-container">
//          <div className="pre-loader">
//          {
//     loading ?  <PuffLoader
//     color={"#198957"}
//     loading={loading}
//     size={100}
//     className='pre-loader '
//     aria-label="Loading Spinner"
//     data-testid="loader"
//   />:<Home/>}
//          </div>
//         </div>
//     )
// }
// export default Loader;