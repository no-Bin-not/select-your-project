import React from "react";
import imgLogo from "../../assets/logo.png";
import coin from "../../assets/coin.jpg";
const Navbar = ({availableBalance}) => {
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <a>
            <img className="w-[60px] h-[60px] " src={imgLogo} alt="" />
          </a>
        </div>
        <div className="navbar-end flex">
          <ul className="menu menu-horizontal  text-xl">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div className=" btn  text-xl rounded-lg">
          <span>{availableBalance}</span>
          <span>Coin</span>
          <span>
            <img className="w-[36px] h-[36px] rounded-4xl" src={coin} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
