import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Download.css';
import Application from '../svg/Application.svg'
import Information from '../svg/Information.svg'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.6,
  },
};
class Download extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

   
        
        // <div className="caro">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        //   infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        itemClass="carousel-item-padding-20-px"
        className="caro"
      >
        
          <div class="card">
            <div className="card-img-div">
              <img className="card-image" src={Information} alt="id" /> 
            </div>
            <div className="card-body text-center">
            <div className="card-title">NIMA MBS<br/>
            Basic Information</div>
            <div className="total-downloads">Total 1143 Downloads</div>
            <hr className="hr-tag"/>
            <a href="#" className="download-button"> DOWNLOAD</a>
            </div>
          </div>
        
          <div class="card">
          <div className="card-img-div">
            <img className="card-image" src={Application} alt="id" /> 
          </div>  
            <div className="card-body text-center">
            <div className="card-title">NIMA MBS<br/>
            Application Form</div>
            <div className="total-downloads">Total 1143 Downloads</div> 
            <hr className="hr-tag"/>
            <a href="#" className="download-button"> DOWNLOAD</a>
            </div>
          </div>

        <div class="card">
          <div className="card-img-div">
            <img className="card-image" src={Information} alt="id" /> 
          </div>
          <div className="card-body text-center">
            <div className="card-title">
              NIMA MBS<br/>
              Claim Form
            </div>
            <div className="total-downloads">Total 1143 Downloads</div>
             <hr className="hr-tag"/>
            <a href="#" className="download-button"> DOWNLOAD</a> 
          </div>
        </div>
          

      </Carousel>
    //   </div>
    
     
    );
  }
}

export default Download;