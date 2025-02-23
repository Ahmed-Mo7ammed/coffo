import React from 'react'
import img from "../../assets/images/about-img.png"


export default function About() {
  return (
    <>
  <div className='container py-5'>
<div className="row d-flex justify-content-center align-items-center py-5">
<div className="col-md-6">
<div className='d-flex flex-column justify-content-center align-items-start'>
<h3 style={{ textTransform: "uppercase" , fontWeight:"900" ,fontSize:"2rem" ,padding:"5px"}} className='text-dark'>About Our shop</h3>
  <h5 style={{  fontWeight:"400" ,fontSize:"2rem",padding:"10px"}} className='text-dark'>Coffee distribution '</h5>
  <p style={{padding:"10px",fontSize:"18px"}}>has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editorhas a more-or-less normal distribution of letters, as oppos</p>
  <button className='btn btn-outline-danger px-4 py-3 fw-bold'>READ MORE </button>
</div>

  </div>
<div className="col-md-6 py-5 ">

<div>
<img src={img} alt="" className='w-100'/>
</div>


</div>


</div>
</div>

  
  </>
  )
}
