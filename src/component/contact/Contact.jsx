import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from "./styles.module.css"
import { Formik } from 'formik';
import { motion } from 'framer-motion';

let {styleForm} =styles
export default function Contact() {
  return (
    <div className='container mt-3 pt-5'>
      <div className="row mt-5 pt-5  text-center">
        
        <div className="col-12 py-3"> <h3 className='fw-bolder'>Get In Touch </h3> </div>
        <div className="col-12"> 

      <motion.div className=' d-flex justify-content-center align-items-center' 
      
      initial={{  y: -70 }} 
      animate={{  y: 0 }} 
      transition={{ duration: 0.9, ease: "easeOut" }} 
      
      
      >
    
      <Formik
initialValues={{ email: '', name: '' , tel:''}}
validate={values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.name) {
    errors.name = 'name is Required';
  }
  if (!values.tel) {
    errors.tel = 'tel is Required';
  }else if (!/^\d{10}$/.test(values.tel)) {
    errors.tel = "Phone number must be 10 digits";
  }

  return errors;
}}
onSubmit={(values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}}
>
{({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  /* and other goodies */
}) => (
  <Form className={styleForm} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Control type="text"
                   placeholder="your name"   
                   name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}/>
                   {errors.name && touched.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
               </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Control type="email"
                 placeholder="your Email"  
                  name="email"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.email}
                 />
                 {errors.email && touched.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
              </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Control type="tel" 
               placeholder="your phone"
               name="tel"
               onChange={handleChange}
               onBlur={handleBlur} 
               value={values.tel}
               />
                {errors.tel && touched.tel && (
                      <div className="text-danger">{errors.tel}</div>
                    )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder=" massage"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       <button className='btn btn-danger rounded-5 w-25'>SEND</button>
      </Form.Group>
    </Form>
)}
</Formik>
      </motion.div>





        </div>
      </div>
    </div>
  )
}
