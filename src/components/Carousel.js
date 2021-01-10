import React, { Component } from "react";
// import "./Download";
// import "./Carousel.css";
// import Application from "../svg/Application.svg";
// import Information from "../svg/Information.svg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpeg";
// export default class Carousel extends Component {
//   constructor() {
//     super();
//     this.state = {
//       current: 1,
//     };
//   }
//   handleClick = () => {
//     if (this.state.current === 1) {
//       let cardNext = document.getElementById("card2");
//       let cardCurrent = document.getElementById("card1");
//     }
//   };
//   componentDidMount() {
//     let cardCurrent = document.getElementsByClassName("carousel");
//     // cardCurrent.carousel();
//     // $(document).ready(function(){
//     //     $('.carousel').carousel();
//     //   });
//   }
//   render() {
//     return (
//       //   <div className="row">
//       //     <div className="col-10 col-sm-3 Download_mx-sm-auto card" id="card1">
//       //       <div>
//       //         <div className="card-img-div">
//       //           <img className="card-image" src={Information} alt="id" />
//       //         </div>
//       //         <div className="card-body text-center">
//       //           <div className="card-title">
//       //             NIMA MBS
//       //             <br />
//       //             Basic Information
//       //           </div>
//       //           <div className="total-downloads">Total 1143 Downloads</div>
//       //           <hr className="hr-tag" />
//       //           <a
//       //             href={image3}
//       //             className="download-button"
//       //             download="first.jpeg"
//       //           >
//       //             {" "}
//       //             DOWNLOAD
//       //           </a>
//       //         </div>
//       //       </div>
//       //     </div>
//       //     <div className="col-10 col-sm-3 Download_mx-sm-auto card" id="card2">
//       //       <div>
//       //         <div className="card-img-div">
//       //           <img className="card-image" src={Information} alt="id" />
//       //         </div>
//       //         <div className="card-body text-center">
//       //           <div className="card-title">
//       //             NIMA MBS
//       //             <br />
//       //             Basic Information
//       //           </div>
//       //           <div className="total-downloads">Total 1143 Downloads</div>
//       //           <hr className="hr-tag" />
//       //           <a
//       //             href={image3}
//       //             className="download-button"
//       //             download="first.jpeg"
//       //           >
//       //             {" "}
//       //             DOWNLOAD
//       //           </a>
//       //         </div>
//       //       </div>
//       //     </div>

//       //     <div className="col-10 col-sm-3 Download_mx-sm-auto card" id="card3">
//       //       <div>
//       //         <div className="card-img-div">
//       //           <img className="card-image" src={Information} alt="id" />
//       //         </div>
//       //         <div className="card-body text-center">
//       //           <div className="card-title">
//       //             NIMA MBS
//       //             <br />
//       //             Basic Information
//       //           </div>
//       //           <div className="total-downloads">Total 1143 Downloads</div>
//       //           <hr className="hr-tag" />
//       //           <a
//       //             href={image3}
//       //             className="download-button"
//       //             download="first.jpeg"
//       //           >
//       //             {" "}
//       //             DOWNLOAD
//       //           </a>
//       //         </div>
//       //       </div>
//       //     </div>
//       //     <button onClick={this.handleClick}>CLick</button>
//       //   </div>
//       <div class="container">
//         <div class="section">
//           <div class="row">
//             <div class="carousel">
//               <a class="carousel-item" href="#one!">
//                 <img src={image3} />
//               </a>
//               <a class="carousel-item" href="#two!">
//                 <img src={image3} />
//               </a>
//               <a class="carousel-item" href="#three!">
//                 <img src={image3} />
//               </a>
//               <a class="carousel-item" href="#four!">
//                 <img src={image3} />
//               </a>
//               <a class="carousel-item" href="#five!">
//                 <img src={image3} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
import Carousel from "react-spring-3d-carousel";
// import v4 from "uuid";
import { v4 as uuid } from "uuid";
import { config } from "react-spring";

export default class CarouselClass extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow,
  };

  slides = [
    {
      key: uuid(),
      content: <img src={image3} alt="1" />,
    },
    {
      key: uuid(),
      content: <img src={image4} alt="2" />,
    },
    {
      key: uuid(),
      content: <img src={image5} alt="3" />,
    },
    {
      key: uuid(),
      content: <img src={image3} alt="4" />,
    },
    {
      key: uuid(),
      content: <img src={image4} alt="5" />,
    },
    {
      key: uuid(),
      content: <img src={image5} alt="6" />,
    },
    {
      key: uuid(),
      content: <img src={image3} alt="7" />,
    },
    {
      key: uuid(),
      content: <img src={image3} alt="8" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    console.log(this.state.config);
    return (
      <div
        // className="row"
        style={{ width: "80%", height: "500px", margin: "0 auto" }}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
