import React from "react";

const ListOfPlayers=()=>{

    const players=[{name:"Sachin",score:80},
        {name:"Rohit",score:75},
        { name: "Shubman Gill", score: 92 },
        { name: "KL Rahul", score: 45 },
        { name: "Suryakumar Yadav", score: 74 },
        { name: "Rishabh Pant", score: 33 },
        { name: "Hardik Pandya", score: 59 },
        { name: "Ravindra Jadeja", score: 88 },
        { name: "Jasprit Bumrah", score: 40 },
        { name: "Mohammed Siraj", score: 79 },
        { name: "Kuldeep Yadav", score: 63 }
        
    ];
    const below70 = players.filter(player => player.score < 70);
    return(
        <div>

           <h1>List Of Players</h1> 
           <ul>
            {players.map(players=>(

                <li key={players.name}>{players.name}-{players.score}</li>
            ))

            }
           </ul>

           <h1>List Of Players less than Score 70 </h1>
           <ul>
          {below70.map(player => (
            <li key={player.name}>{player.name} - {player.score}</li>
            ))
          }
           </ul>
        </div>

    );
};
export default ListOfPlayers;