import "./journey.css"
import Morning from "../../images/morning-2243465.jpg"
import Pill1 from "../../images/pill1.webp"

export default function Journey(){
    return(
        <>
        <div className="journey-container">
            <h2 data-aos='fade-up'>The journey.</h2>
            <p>Most people will notice the effects of LYMA within a few weeks. It’s life changing. You can expect huge benefits and changes to your health as you progress along your LYMA journey.</p>
            <div className="body-img" >
                <img data-aos='fade-up' src={Morning}></img>
            </div>
            <div>
        <div className="body-text-body">
        <div className="body-text-main">
        <div className="body-text-container">
        <h2 data-aos='fade-up'>More than a vitamin pill.</h2>
        <p>LYMA has redefined the supplement industry. The only supplement to use nine peer-reviewed ingredients in one ultimate formula.
This powerful formula was created to help you find balance in today’s modern world.
LYMA combines the best ingredients with the best science to help you feel your absolute best.</p>
        </div>
        <div className="body-text-container">
        <h2 data-aos='fade-up'>The difference is everything.</h2>
        <img className="journey-image" data-aos='fade-up' src={Pill1}></img>
        <div className="journey-item">
        <h3>Sleep.  Anxiety.  Beauty.  Focus.  Performance.  Health.</h3>
        </div>
        <div className="tags">
        <p>One ultimate formula.</p>
        <p>Nine peer-reviewed ingredients.</p>
        <p>Optimally dosed to work.</p>
        <p>THE supplement solution.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}