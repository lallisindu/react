// HomePage.js
// HomePage.js
import React from 'react';
import Tour from './Tour';

const toursData = [
  { date: "JUL 16", location: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL 19", location: "TORONTO, ON", venue: "BUDWEISER STAGE" },
  {date:"JUL 22", location:"BRISTOW, VA",venue:"JIGGY LUBE LIVE" },
  {date:"JUL 29", location:"PHOENIX, AZ",venue:"AK-CHIN PAVILION" },
  {date:"JAUG 2", location:"LAS VEGAS, NV",venue:"JT-MOBILE ARENA" },
  {date:"AUG 7", location:"CONCORD, CA",venue:"CONCORD PAVILION" }
  // Add more tour items as needed
];

const HomePage = () => {
    return (
      <div className="container">
        <h2 className="text-center mb-4">TOURS</h2>
        <Tour tours={toursData} />
      </div>
    );
  };



export default HomePage;
