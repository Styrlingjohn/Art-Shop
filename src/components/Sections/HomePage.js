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
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    backgroundColor: "#e0ffcd",
  };
  const headerStyle = {
     textAlign: "center",
  };

  return (
    <div>

      <div style={containerStyles}>
        <h1 style={headerStyle}>Nature</h1>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
    </div>
  );
};

export default HomePage; 