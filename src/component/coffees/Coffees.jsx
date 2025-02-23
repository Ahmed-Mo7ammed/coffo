import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/img-1.png";
import img2 from "../../assets/images/img-2.png";
import img3 from "../../assets/images/img-3.png";
import img4 from "../../assets/images/img-4.png";
import "./CarouselStyles.css";
import { motion } from 'framer-motion';

export default function CoffeeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 4, // عرض 4 شرائح في نفس الوقت
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='container py-5 '>
      <div className="row pt-5">

        <div className="col-12 pt-5">

      <h3 className='text-center mb-4 fw-bolder' >OUR COFFEE OFFER</h3>

        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">

        <motion.div className="col-12 px-4"
        
        initial={{ opacity: 0,}} 
        animate={{ opacity: 1, }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        
        >
        <Slider {...settings}>
        {[img1, img2, img3, img4].map((img, index) => (
          <div key={index} className='card-container'>
            <div className='card'>
              <img src={img} alt={`Coffee ${index + 1}`} className='card-img'/>
              <div className='card-body'>
                <h4 className='card-title'>TYPES OF COFFEE</h4>
                <p className='card-text'>Enjoy the best coffee experience with our premium selection.</p>
                <button className='btn btn-secondary'>READ MORE</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
        </motion.div>
      </div>
     
    </div>
  );
}
