
import Man from "../../images/man-6589404.jpg"
import Man1 from "../../images/male-4494491.jpg"

export default function Specialimg() {
    return(
        <>
        <div className="">
        <div className="body-img">
            <img className="special-img" data-aos="fade-right" data-aos-duration="1500" src={Man}></img>
{/*             <div className="special-img-text">
      <h2 >Sleep is a superpower.</h2>
      <p>LYMA. The ultimate supplement.</p>
      </div> */}
        </div>
        <div className="body-img">
            <img className="special-img" data-aos="fade-left" data-aos-duration="1500" src={Man1}></img>
{/*             <div className="special-img-text">
      <h2 >Sleep is a superpower.</h2>
      <p>LYMA. The ultimate supplement.</p>
      </div> */}
              </div>
      <div className="special-con">
          <div className="special-item">
            <h3>“The new standard in supplements.”</h3>
            <h2>BAZAR</h2>
          </div>
          <div className="special-item">
          <h3>"A pioneer in health and wellness.”</h3>
            <h2>VOGUE</h2>
          </div>
          <div className="special-item">
          <h3>“The A-list secret health hack.”</h3>
            <h2>FORBES</h2>
          </div>
      </div>

        </div>
        </>
    )
}

