import React from 'react';

const IndianPlayers = () => {
  const team = ["Virat", "Rohit", "Gill", "Rahul"];
  const [odd1, even1, odd2, even2] = team;

  const T20players = ["Rohit", "Surya", "Hardik"];
  const RanjiPlayers = ["Pujara", "Rahane", "Iyer"];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
      </ul>

      <h3>Merged T20 + Ranji Players</h3>
      <ul>
        {mergedPlayers.map(player => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
