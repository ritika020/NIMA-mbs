import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Download.css';
import Application from '../svg/Application.svg'
import Information from '../svg/Information.svg';
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpeg";

class Download extends React.Component {

  render() {
    return (
    
      <div className="Download_container mobile-card-container">
      
      <div className="row text-center flex-nowrap flex-sm-wrap Download_row_styling">  

          <div className="col-10 col-sm-3 Download_mx-sm-auto card">
            <div>
            <div className="card-img-div">
              <img className="card-image" src={Information} alt="id" /> 
            </div>
            <div className="card-body text-center">
            <div className="card-title">NIMA MBS<br/>
            Basic Information</div>
            <div className="total-downloads">Total 1143 Downloads</div>
            <hr className="hr-tag"/>
            <a href={image3} className="download-button" download="first.jpeg"> DOWNLOAD</a>
            </div>
            </div>
          </div>
        
          <div className="col-10 col-sm-3 Download_mx-sm-auto card">
          <div>
          <div className="card-img-div">
            <img className="card-image" src={Application} alt="id" /> 
          </div>  
            <div className="card-body text-center">
            <div className="card-title">NIMA MBS<br/>
            Application Form</div>
            <div className="total-downloads">Total 1143 Downloads</div> 
            <hr className="hr-tag"/>
            <a href={image4} className="download-button" download="second.jpeg"> DOWNLOAD</a>
            </div>
          </div>
          </div>

        <div className="col-10 col-sm-3 Download_mx-sm-auto card">
          <div>
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
            <a href={image5} className="download-button" download="third.jpeg"> DOWNLOAD</a> 
          </div>
        </div>
        </div>
        </div>  
        </div>
        
      
    );
  }
}

export default Download;
