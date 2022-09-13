

import Mainimg from "../images/prayer-6764197.jpg"
export default function Supimg(){
    return(
        <>
              <div className="main-image-container">
      <img className="main-img" data-aos="zoom-out" data-aos-duration="1500"src={Mainimg}></img>
      <div  className="img-text">
      <h2 >The ultimate supplement.</h2>
      <p>Nine powerful ingredients. One ultimate formula.</p>
      <button className="active-button3">BUY</button>
      </div>
      </div>
        </>
    )
}