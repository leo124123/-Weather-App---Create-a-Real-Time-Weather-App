import "./Style/header.css"
import React from "react";
import logo from "../assets/img/logo.png"
import { Search, LocateFixed } from 'lucide-react';

export default function Header({ onSearch, onLocation }) {

  function handleKey(e) {
    if (e.key === "Enter") {
      onSearch(e.target.value);
      e.target.value = "";
    }
  }

  return ( 
    <header className="header"> 
      <div className="title">
        <img src={logo} alt="Weather Logo" />
      </div>

      <div className="input"> 
        <Search className="search-icon" size={15} />
        <input 
          type="text" 
          placeholder="Enter city name..." 
          onKeyDown={handleKey}
        />
      </div>

      <div className="btn-countainer"> 
        <button className="btn" onClick={onLocation}><LocateFixed style={{ margin: '1 0.4rem', background: 'transparent' }} size={16} /> Current Location</button>
      </div>
    </header>
  )
}
