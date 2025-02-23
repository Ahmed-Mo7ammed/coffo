import React from 'react'
import blogImg1 from "../../assets/images/blog-img1.png"
import blogImg2 from "../../assets/images/blog-img2.png"
import styles from"./styles.module.css"
import { motion} from 'framer-motion'
let {bloglabel}=styles
export default function Blog() {
  return <>
  <motion.div className="container mt-5 py-5"
   initial={{ opacity: 0, y: -50 }} 
   animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.9, ease: "easeOut" }} 
  >
    <h2 className='my-4 py-3 fw-bolder fs-1'> OUR BLIG</h2>
<div className="row d-flex justify-content-between align-items-center  ">
<div className="col-md-6 d-flex justify-content-center align-items-center position-relative my-2 ">
  <div className={` ${bloglabel}`  }>05 April</div>
<div className='blogCard shadow-lg d-flex justify-content-center align-items-start flex-column '>
<div className="blogImg">
  <img src={blogImg1} alt=""className='w-100' />
</div>

<div className="blogContent  "></div>
<h4 className='fw-bolder px-3'>PREP TECHNIQUES Coffee</h4>
<p className='px-3 text-muted fw-medium'> distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more </p>
</div>




</div>
<div className="col-md-6 d-flex justify-content-center align-items-center position-relative my-2">
<div className={` ${bloglabel}`  }>05 April</div>
<div className='blogCard shadow-lg d-flex justify-content-center align-items-start flex-column '>
<div className="blogImg">
  <img src={blogImg2} alt="" className='w-100' />
</div>
<div className="blogContent"></div>
<h4 className='fw-bolder px-3'>Enjoy Best Coffee</h4>
<p className='px-3 text-muted fw-medium'>distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more </p>
</div>


</div>
</div>

  </motion.div>
  
  </>
}
