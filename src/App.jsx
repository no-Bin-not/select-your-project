import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";

import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers= async ()=>{
    const res=await fetch("/players.json")
    return res.json()
}
const playerPromise=fetchPlayers()
function App() {
  const [toggle,setToggle]=useState(true)
  const [availableBalance, setAvailableBalance]=useState(600000)
  const [purchasePlayers, setpurchasePlayers]=useState([])

  const removePlayer=(p)=>{
    const filterData=purchasePlayers.filter(ply=>p.player_name!==ply.player_name)
    setpurchasePlayers(filterData)
    setAvailableBalance(availableBalance+parseInt(p.price.split("USD").join("")))
  }

  return (
    <>
      <Navbar 
        availableBalance={availableBalance}
      ></Navbar>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between mb-4 mt-8">
       
          <h1 className="font-bold text-2xl">{
            toggle?"Available Players":`Selected Players${purchasePlayers.length}/20`
            }</h1>
        
        
        <div>
          <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-r-0 border-1 border-gray-400 rounded-l-2xl ${toggle===true?"bg-yellow-300":""}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-l-0 border-1 border-gray-400 rounded-r-2xl ${toggle===false?"bg-yellow-300":""}`}>Selected({purchasePlayers.length})</button>
        </div>
      </div>

      {
        toggle===true?<Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <AvailablePlayers 
        playerPromise={playerPromise}
        setAvailableBalance={setAvailableBalance}
        availableBalance={availableBalance}
        purchasePlayers={purchasePlayers}
        setpurchasePlayers={setpurchasePlayers}

        ></AvailablePlayers>
      </Suspense>:<SelectedPlayers
        removePlayer={removePlayer}
        purchasePlayers={purchasePlayers}
      ></SelectedPlayers>
      }
     
    </>
  );
}

export default App;
