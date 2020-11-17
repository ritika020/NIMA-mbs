import React, {Fragment} from "react";
import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import picture from "../images/image2.jpg";

const responsive={
    extraLargeDesktop: {
       //You can name the screensize as per your choice
       breakpoint: {max: 4000, min: 3000},
       items: 3
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 3
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items:1.5,
    }
};
 class Slider extends React.Component{
     constructor(props)
     {
         super(props);
         this.state={
             showDoctors: false,
             doctors:[
                 {
                 image: picture,
                 spanName: "Chairman",
                 fname: "DR. SHANTILAL KISHAN SHARMA",
                 address: "645 Jss Road, Kalbadevi Mumbai, Maharashtra 02222095845",
                 phone: "1234567890"
                 },
                 {
                   image: picture,
                   spanName: "Convenor",
                   fname: "DR. KIRAN DESHPANDE",
                   address: "Vasavi Nagar, Karkhana, Hyderabad, 500015",
                   phone: "098765432"  
                 },
                 {
                     image: picture,
                     spanName: "Treasurer",
                     fname: "DR. DINESH RATHI",
                     address: "44, abids Shopping Centre, Abids, Andhra Pradesh, 500001",
                     phone: "+91 1234567890"
                 },
                 {
                     image: picture,
                     spanName: "Member",
                     fname: "DR. A.K. JOSHI",
                     address: "Mumbai, Maharashtra",
                     phone: "+91 1234567890"
                 },
                 
            ],

         }
     }
      render(){
          console.log(this.state.doctors);
          return(

            <div className="row">
                <div className="col-md-3 hidden-xs"></div>
                <div className="col-md-9 col-xs-12 Slider_car-row">
              <Carousel
                 //className="mobileCarousel"
                 swipeable={true}
                 draggable={false}
                 responsive={responsive}
                 showArrows={true}
                 ssr={false} //means to render carousel on server-side
                 
                 //autoplay={this.props.deviceType !== "mobile" ? true: false}
                 //autoPlaySpped={1000}
                 keyBoardControl={true}
                 //customTransition="all .5"
                 //transitionDuration={500}
                 removeArrowOnDeviceType={["mobile"]}
                 deviceType={this.props.deviceType} >
                
                {
                    this.state.doctors.map((doctor, index)=>
                    <div className="row ">
                    <div className="col-md-3" >
                         <div  className="Slider_photo"><img className= "Slider_picture" src={doctor.image} /><p className="Slider_names">{doctor.spanName}</p></div>
                        <div className="Slider_fname">{doctor.fname}</div>
                        <div className="Slider_address">{doctor.address}</div>
                        <div className="Slider_phone">{doctor.phone} </div>
                    </div>
                    </div>
                    
                    
                    )
                }
            </Carousel>
            </div>
            </div>
          );
      }
 
 
    }
export default Slider;