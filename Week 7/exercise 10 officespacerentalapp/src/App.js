import React from 'react';
import './App.css';

function App() {

  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: "Chennai", image: "image.png" },
    { Name: "Regus", Rent: 75000, Address: "Mumbai", image: "image2.jpg" },
    { Name: "WeWork", Rent: 60000, Address: "Bangalore", image: "image3.jpeg" }
  ];

  return (
    <div >
      <h1>Office Space, at Affordable Range</h1>

      {officeSpaces.map((office, index) => (
        <div key={index} style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
          <img 
            src={office.image}
            alt={office.Name}
            width="25%"
            height="25%"
          />
          <h2>Name: {office.Name}</h2>
          <h3 style={{ color: office.Rent <= 60000 ? 'red' : 'green' }}>
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
