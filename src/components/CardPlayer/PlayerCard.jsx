import React, { useState } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/Vector.png";

const PlayerCard = ({
  player,
  index,
  setAvailableBalance,
  availableBalance,
  setpurchasePlayers,
  purchasePlayers
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleCoinData = (playerData) => {
    const price = parseInt(playerData.price.split("USD").join(""));
    if(availableBalance<price){
        alert("Vaya tomar to taka nai .. hehe!!")
        return
    }
    
    setIsSelected(true);
    setAvailableBalance(availableBalance - price);
    setpurchasePlayers([...purchasePlayers,playerData])

  };
  return (
    <div key={index} className="card bg-base-100 shadow-sm p-5 border-gray-600">
      <figure>
        <img
          className="w-full h-[260px]"
          src={player.player_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center text-xl">
          <img className="mr-4" src={userImg} alt="" />
          <h2>{player.player_name}</h2>
        </div>
        <div className="flex items-center justify-between mt-4 text-xl gap-5">
          <div className="flex items-center">
            <img
              className="mr-5 h-[20px] w-[20px] fill-base-300 "
              src={flagImg}
              alt=""
            />
            <p>{player.player_country}</p>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>

        <hr className="mt-4" />
        <div className="flex items-center justify-between text-xl mt-4">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex items-center justify-between text-xl mt-4 gap-">
          <h2>{player.batting_style}</h2>
          <p>{player.bowling_style}</p>
        </div>
        <div className="flex items-center justify-between text-xl mt-4">
          <h2>
            Price: $<span>{player.price}</span>
          </h2>
          <button disabled={isSelected} onClick={() =>{handleCoinData(player)}} className="btn">
            {isSelected ? "Selected" : "Chose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
