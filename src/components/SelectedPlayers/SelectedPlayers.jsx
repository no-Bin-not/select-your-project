import React from 'react';
import SelectedCart from '../SelectedCart/SelectedCart';

const SelectedPlayers = ({purchasePlayers,removePlayer}) => {

    return (
        <div>
            {
                purchasePlayers.map((player,index)=><SelectedCart
                removePlayer={removePlayer}
                key={index}
                player={player}
                ></SelectedCart>)
            }
        </div>
    );
};

export default SelectedPlayers;