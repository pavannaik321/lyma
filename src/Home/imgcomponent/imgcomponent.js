import "./imgcomponent.css"
import Mainimg from "../../images/prayer-6764197.jpg"

export default function Imgcomponent(){
    return(
        <>
      <div className="main-image-container">
      <img className="main-img" data-aos="zoom-out" data-aos-duration="1500"src={Mainimg}></img>
      <div  className="img-text">
      <h2 >Sleep is a superpower.</h2>
      <p>LYMA. The ultimate supplement.</p>
      </div>
      </div>
        </>
    )
}