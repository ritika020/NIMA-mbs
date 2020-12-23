import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/Hero.js";
import Download from "./components/Download.js";
import Slider from "./components/Slider.js";
import Search from "./components/Search.js";
import Footer from "./components/Footer.js";

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Download />
    <Slider />
    <Search />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Download from "./components/Download.js"
// import Hero from "./components/Hero.js";
// import Sliderone from "./components/Sliderone.js";
// import Slidertwo from "./components/Slidertwo.js";
// import Sliderthree from "./components/Sliderthree.js";

// ReactDOM.render(
//   <React.StrictMode>
//     <Hero />
//     <Download />
//     <br/>
//   <br/><br/><br/>
//     <div className="heading">BOARD MEMBERS</div>
//     <Sliderone />
//     <br/><br/>
//     <div className="heading">MEMBERS</div>
//     <Slidertwo />
//     <br /><br />
//     <div className="heading">Ex. Officio MEMBERS</div>
//     <Sliderthree />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
