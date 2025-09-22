import React, { use } from "react";

import PlayerCard from "../CardPlayer/PlayerCard";

const AvailablePlayers = ({ playerPromise,setAvailableBalance,availableBalance,setpurchasePlayers,purchasePlayers}) => {
  const playerData = use(playerPromise);
  
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-5">
      {playerData.map((player, index) => (
        <PlayerCard 
          key={index} 
          player={player}
          index={index}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          setpurchasePlayers={setpurchasePlayers}
          purchasePlayers={purchasePlayers}

        ></PlayerCard>
          
        
      ))}
    </div>
  );
};

export default AvailablePlayers;
