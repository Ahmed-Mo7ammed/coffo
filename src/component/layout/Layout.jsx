import React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Layout() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.9, ease: "easeOut" }} 
      >
        <Navbar />
      </motion.div>

      <Outlet />

      <Footer />
    </>
  );
}
