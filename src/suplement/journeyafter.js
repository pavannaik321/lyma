import Morning from "../images/morning-2243465.jpg"
import Pill1 from "../images/pill1.webp"
import { MdAddCircle } from "react-icons/md";

export default function Journeyafter(){
    return(
        <>
        <div className="journey-container">
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
            <h2 data-aos='fade-up'>It’s time to feel better.</h2>
            <p>Whether you’re looking to get back what you’ve lost or take yourself to another level. LYMA is the solution you’ve been looking for.There’s no better feeling than feeling your best.</p>
            <div className="body-img1" >
                <img data-aos='fade-up' className="fade-up1" src={Morning}></img>
                <div className="jmain">
                    <div  className="jcontainer">
                    <div>
                    <div data-aos="fade-right" data-aos-duration="3000">
                        <div className="icon"><MdAddCircle /></div>
                        <h2 className="jh2">Sleep</h2>
                        <p className="jp2">Remember getting eighthours of quality sleep?</p>
                        </div>
                    </div>
                    </div>
                    <div className="jcontainer">
                    <div data-aos="fade-right" data-aos-duration="2500">
                    <div id="jc">
                        <div className="icon"><MdAddCircle /></div>
                        <h2 className="jh2">Health</h2>
                        <p id="ji" className="jp2">Remember getting eighthours of quality sleep?</p>
                        </div>
                    </div>
                    </div>
                    <div className="jcontainer">
                    <div className="jcontainer">
                    <div data-aos="fade-right" data-aos-duration="2000">
                        <div className="icon"><MdAddCircle /></div>
                        <h2 className="jh2">Performance</h2>
                        <p className="jp2">Remember getting eighthours of quality sleep?</p>
                        </div>
                    </div>
                    </div>
                    <div className="jcontainer">
                    <div className="jcontainer">
                    <div data-aos="fade-left" data-aos-duration="2000">
                        <div className="icon"><MdAddCircle /></div>
                        <h2 className="jh2">Beauty</h2>
                        <p className="jp2">Remember getting eighthours of quality sleep?</p>
                        </div>
                    </div>
                    </div>
                    <div className="jcontainer">
                    <div className="jcontainer">
                    <div data-aos="fade-left" data-aos-duration="2500">
                        <div className="icon"><MdAddCircle /></div>
                        <h2 className="jh2">Focus</h2>
                        <p className="jp2">Remember getting eighthours of quality sleep?</p>
                        </div>
                    </div>
                    </div>
                    <div className="jcontainer">
                    <div className="jcontainer">
                        <div data-aos="fade-left" data-aos-duration="3000">
                        <div className="icon"><MdAddCircle /></div>
                        <h2 className="jh2">Anxiety</h2>
                        <p className="jp2">Remember getting eighthours of quality sleep?</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div>
        </div>
        </div>
        </>
    )
}