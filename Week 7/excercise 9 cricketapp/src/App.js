import React from 'react';
import ListOfPlayers from './ListOfPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  var flag = true; 

  if (flag === true) {
    return (
      <div>
        <ListOfPlayers />
      </div>
    );
  } else {
    return (
      <div>
        <IndianPlayers />
      </div>
    );
  }
}

export default App;
