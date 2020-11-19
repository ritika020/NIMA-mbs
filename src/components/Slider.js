import React, { Fragment } from 'react';
import './Slider.css';
import image2 from "../images/image2.jpg";
import image1 from "../images/image1.jpg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpeg";
import Carousel from "react-multi-carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
        items: 1.5,
    }
  };
class Slider extends React.Component {
    constructor(props)
    { 
        super(props);
        this.state = {
            showDoctors: false,
            boardmembers: [
                {
                    image:image1,
                    designation: "Chairman",
                    name: "DR. SHANTILAL KISHAN SHARMA",
                    address:"645, Jss Road, Kalbadevi Mumbai, Maharashtra, 400002",
                    phone:"+91 1234567890",
                },
                {
                    image:image2,
                    designation: "Convenor",
                    name:"DR. KIRAN DESHPANDE",
                    address:"Vasavi Nagar, Karkhana, Hyderabad, 500015",
                    phone:"+91 1234567890",
                },
                {
                    image:image3,
                    designation: "Treasurer",
                    name: "DR. DINESH RATHI",
                    address:"44, abids, SHopping Centre, Abids, Andhra Pradesh, 500001",
                    phone:"+91 1234567890",
                    
                }
            ],
            members:[
               {
                    image:image4,
                    designation: "Member",
                    name: "DR. A.K. JOSHI",
                    address:"Mumbai, Maharashtra",
                    phone:"+91 1234567890"
                },
                {
                    image:image5,
                    designation: "Member",
                    name:"DR. SUMANT PANDYA",
                    address:"Mumbai, Maharashtra",
                    phone: "+91 1234567890"
                },
                {
                    image: image1,
                    designation: "Member",
                    name: "DR. RAJIVKUMAR ASHOKA",
                    address:"Mumbai, Maharashtra",
                    phone: "+91 1234567890"
                    
                },
                {
                    image:image2,
                    designation: "Member",
                    name: "DR. SWATI SANGLE",
                    address:"Mumbai, Maharashtra",
                    phone: "+91 1234567890"
                    
                },
                {
                    image:image3,
                    designation: "Member",
                    name: "DR. RIYA SHAH",
                    address:"Mumbai, Maharashtra",
                    phone: "+91 1234567890"
                    
                }
            ],
            exofficiomembers:[
                 {
                    image:image1,
                    designation: "President",
                    name: "DR. VINAYAK TEMBHURNIKAR",
                    address:"Solapur, Maharashtra",
                    phone: "+91 1234567890"
                },
                {
                    image:image2 ,
                    designation: "Gen. Secretry",
                    name:"DR. U.S PANDEY",
                    address:"Varanasi, Uttar Pradesh",
                    phone: "+91 1234567890"
                },
                {
                    image:image3,
                    designation: "Treasurer",
                    name: "DR. ASHUTOSH KULKARNI",
                    address:"Akola, Maharashtra",
                    phone: "+91 1234567890"
                    
                }
            ]
            ,
        }
        // this.openModel = this.openModel.bind(this);

    }
    render()
    {return(  <>
        <div>
        <div className="Slider_heading">BOARD MEMBERS</div>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel className="Slider_caro"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
        ssr={false} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[ "mobile"]}
        deviceType={this.props.deviceType}
    itemClass="carousel-item-padding-40-px"
    >
    
    {
        this.state.boardmembers.map((bmember,index) =>
        <div key={index} className="Slider_doctorContainer" >
        <div className="Slider_photo">
        <img src={bmember.image} alt={bmember.name} className="Slider_picture" />
        <p className="Slider_names">{bmember.designation}</p>
        </div>
                <p className="Slider_fname">{bmember.name}</p>
                <p className="Slider_address">{bmember.address}</p>
                <p className="Slider_phone">{bmember.phone}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div>
    </div>
    {/* <h3 >SECRETARY</h3>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel className="caro"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
        ssr={false} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        deviceType={this.props.deviceType}
    itemClass="carousel-item-padding-40-px"
    >
    
    {
        this.state.joint.map((joint,index) =>
        <div key={index} className="AboutUs_doctorContainer" >
        <div className="AboutUs_imageContainer">
        <img src={joint.image} alt={joint.name} className="AboutUs_doctorImage" />
        <p className="AboutUs_doctorDesignation">{joint.designation}</p>
        </div>
        <p className="AboutUs_doctorName">{joint.name}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div> */}
    <div className="Slider_heading">MEMBERS</div>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel className="Slider_caro"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
        ssr={false} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        deviceType={this.props.deviceType}
    itemClass="carousel-item-padding-40-px"
    >
    
    {
        this.state.members.map((member,index) =>
        <div key={index} className="Slider_doctorContainer" >
        <div className="Slider_photo">
        <img src={member.image} alt={member.name} className="Slider_picture" />
        <p className="Slider_names">{member.designation}</p>
        </div>
        <p className="Slider_fname">{member.name}</p>
        <p className="Slider_address">{member.address}</p>
        <p className="Slider_phone">{member.phone}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div>
    
     <div className="Slider_heading">Ex. Officio MEMBERS</div>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel className="Slider_caro"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
        ssr={false} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        deviceType={this.props.deviceType}
    itemClass="carousel-item-padding-40-px"
    >
    
    {
        this.state.exofficiomembers.map((officio,index) =>
        <div key={index} className="Slider_doctorContainer" >
        <div className="Slider_photo">
        <img src={officio.image} alt={officio.name} className="Slider_picture" />
        <p className="Slider_names">{officio.designation}</p>
        </div>
        <p className="Slider_fname">{officio.name}</p>
        <p className="Slider_address">{officio.address}</p>
        <p className="Slider_phone">{officio.phone}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div>
     </>
    )}
    }
    
    export default Slider;