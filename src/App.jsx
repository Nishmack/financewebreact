// App.js
import React from 'react';
import CustomNavbar from './components/Navbar/Navbar';
import  CarouselFadeExample from './components/Carousal/Carousal'
import  CustomSection from './components/Storyandmission/Storyandmission'
import OurServices from './components/Ourservices/Ourservices'
import Imagesection from './components/Imagesection/Imagesection';
import Countersection from './components/Countersection/Countersection';
import Founder from './components/Founder/Founder';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <CarouselFadeExample />
      <CustomSection />
      <OurServices />
      <Imagesection />
      <Countersection />
      <Founder />
      
    </div>
  );
}

export default App;
