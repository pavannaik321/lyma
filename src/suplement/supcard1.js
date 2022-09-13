import Supcardimg1 from "../images/man-3803551.jpg"

export default function Supcard1(){
    return(
        <>
            <div className="sub-card-main2">
                <div data-aos-easing="linear"
     data-aos-duration="1500" data-aos="fade-right" className="sub-card-container2">
                    <h2>Science at its best.</h2>
                    <p>“LYMA has created an industry leader. Never before has so much validated science and patented technology been combined into one formula.”</p>
                    <h3>DR. PAUL CLAYTON PHD.</h3>
                    <p>INSTITUTE OF FOOD, BRAIN & BEHAVIOUR.</p>
                    <a href="#">READ MORE</a>
                </div>
                <img data-aos-easing="linear"
     data-aos-duration="1500" data-aos="fade-left" className="sup-card-img" src={Supcardimg1}></img>
            </div>
        </>
    )
}