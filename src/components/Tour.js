import React from 'react';
import { Button } from 'react-bootstrap';

const TourItem = ({ date, location, venue }) => {
  return (
    <div className="border-bottom py-2 d-flex align-items-center">
      <div className="flex-grow-1">
        <p className="mb-0"><strong>Date:</strong> {date}</p>
        <p className="mb-0 ml-3"><strong>Location:</strong> {location}</p>
        <p className="mb-0 ml-3"><strong>Venue:</strong> {venue}</p>
      </div>
      <Button variant="primary">BUY TICKETS</Button>
    </div>
  );
};

const Tour = () => {
  return (
    <div style={{ maxWidth: '600px', maxHeight: '500px'}}>
      <TourItem date="JUL 16" location="DETROIT, MI" venue="DTE ENERGY MUSIC THEATRE" />
      <TourItem date="JUL 19" location="TORONTO, ON" venue="BUDWEISER STAGE" />
      <TourItem date="JUL 22" location="BRISTOW, VA" venue="JIGGY LUBE LIVE" />
        <TourItem date="JUL 29"  location="PHOENIX, AZ" venue="AK-CHIN PAVILION" />
        <TourItem date= "JAUG 2"  location="LAS VEGAS, NV" venue="JT-MOBILE ARENA" />
        <TourItem date="AUG 7" location="CONCORD, CA" venue="CONCORD PAVILION" />
      {/* Add more TourItem components for additional tour items */}
    </div>
  );
};

export default Tour;
