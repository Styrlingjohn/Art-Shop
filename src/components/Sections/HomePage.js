import React from 'react';
import ImageSlider from "./imageBar";

const HomePage = () => {
  const slides = [
    { url: "http://localhost:3000/beach.jpg", title: "beach" },
    { url: "http://localhost:3000/waves.jpg", title: "waves" },
    { url: "http://localhost:3000/mountain.png", title: "mountain" },
    { url: "http://localhost:3000/valley.jpg", title: "valley" },
    { url: "http://localhost:3000/desert.webp", title: "italy" },
  ];

  const slides1 = [
    { url: "http://localhost:3000/boxing.jpg", title: "beach" },
    { url: "http://localhost:3000/kobe.jpg", title: "waves" },
    { url: "http://localhost:3000/football.jpg", title: "mountain" },
    { url: "http://localhost:3000/hockey.jpg", title: "valley" },
    { url: "http://localhost:3000/running.webp", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  const headerStyle = {
     textAlign: "center",
     marginTop: "10px",
  };

  return (
    <div className='displayBox'>
      <div style={containerStyles} className='nature'>
        <h1 style={headerStyle}>Jimmy Smith</h1>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
      <div style={containerStyles} className='sports'>
        <h1 style={headerStyle}>Ray Quaza</h1>
        <ImageSlider slides={slides1} parentWidth={500}/>
        </div>
    </div>
  );
};

export default HomePage; 