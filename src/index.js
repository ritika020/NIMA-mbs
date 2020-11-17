import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Download from "./components/Download.js"
import Hero from "./components/Hero.js";
import Slider from "./components/Slider.js";


ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Download />
    <br/>
  <br/><br/><br/>
    <div className="heading">BOARD MEMBERS</div>
    <Slider />
    <br/><br/>
    <div className="heading">MEMBERS</div>
    <Slider />
    <br /><br />
    <div className="heading">Ex. Officio MEMBERS</div>
    <Slider />
  </React.StrictMode>,
  document.getElementById('root')
);
