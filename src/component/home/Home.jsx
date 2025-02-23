import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import homeImg from "../../assets/images/banner-bg.png";
import styles from "./styles.module.css"
import { motion } from "framer-motion"
export default function Home() {
  let navigater=useNavigate()

  const [onLoaded, setOnLoaded] = useState(false)
  useEffect(() => {
    const img = new Image();  
    img.src = homeImg ;

    img.onload = () => { setOnLoaded(true) };
  }, [])
  return (
    <div
   
      className={`container-fluid pt-5 `}
      style={{
        backgroundImage: onLoaded?`url(${(homeImg)})`:"none",
        backgroundSize: "cover",
        backgroundPosition: "center", 
       height:"100vh",
        
      }}
    >
      <motion.div className="row pt-5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
      >

        <div className="col-md-6 "> 
     <div className='d-flex flex-column justify-content-center align-items-start w-100 p-5'>
     <h1 style={{fontSize:"6rem" , fontWeight:"bolder",color:"white"}}>Coffee<span style={{display:"block"}}> Shop</span> </h1>
       <p style={{fontSize:"1.2rem",color:"white"}}>more-or-less normal distribution of letters, as opposed to using</p>
       <div>

<button className="btn btn-danger px-5 py-3 m-2" onClick={()=>{navigater("/About")}}>ABOUT AS </button>        
<button className="btn btn-outline-danger px-5 py-3 m-2" onClick={()=>{navigater("/contact")}} >CALL NOW </button>        
       </div>
     </div>
        </div>
      </motion.div>
    </div>
  );
}
