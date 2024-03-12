import React from 'react';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';
import Offers from '../components/offers/Offers';
import Plans from '../components/plans/Plans';
import Rooms from '../components/rooms/Rooms';
import Slide from '../components/slider/Slide';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Plans />
      <Rooms />
      <Slide />
      <Footer />
    </>
  )
}

export default Home;