import React from "react";
import "./Hero.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import svg94 from '../svg/Group294.svg';
import hero from '../svg/Hero.svg';

function Hero(){
    return(
        <div className="Hero_container">
          <div className="row align-items-center">
            <div className="align-items-center  col-md-4 col-sm-4 col-xs-12">
                <div className="Hero_firstcol">
                <div className="Hero_first">Nima</div>
                <div className="Hero_second"><span className="Hero_initial">M</span>utual</div>
                <div className="Hero_second"><span className="Hero_initial">B</span>enefits</div>
                <div className="Hero_second"><span className="Hero_initial">S</span>cheme</div>
                <button type="button" class="btn btn-link button">DOWNLOAD BROCHURE  <img className="Hero_arrowsvg"src={svg94}/></button>
            </div>
            </div>
            <div class="col-md-8 col-sm-8 col-xs-12">
              <div className="Hero_secondcol">
              <img  className="Hero_herosvg" src={hero} />
              </div>
            </div>
        </div>
        </div>
    );
}
export default Hero;