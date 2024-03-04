// Tour.js
import React from 'react';
import './Tour.css'

const Tour = ({ tours }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        {tours.map((tour, index) => (
          <div key={index}>
            <h5 className="card-title">{tour.date}</h5>
            <span className="card-text">{tour.location}</span>
            <span className="card-text">{tour.venue}</span>
            <button className="btn btn-primary">Buy Tickets</button>
            {index !== tours.length - 1 && <hr className="tour-line" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
