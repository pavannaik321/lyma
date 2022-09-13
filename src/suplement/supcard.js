import Supcardimg from "../images/woman-3096664.jpg"

export default function Supcard(){
    return(
        <>
            <div className="sub-card-main">
                <img data-aos="fade-right" ddata-aos-easing="linear"
     data-aos-duration="1500" className="sup-card-img" src={Supcardimg}></img>
                <div data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500" className="sub-card-container">
                    <h2>Science at its best.</h2>
                    <p>“LYMA has created an industry leader. Never before has so much validated science and patented technology been combined into one formula.”</p>
                    <h3>DR. PAUL CLAYTON PHD.</h3>
                    <p>INSTITUTE OF FOOD, BRAIN & BEHAVIOUR.</p>
                    <a href="#">READ MORE</a>
                </div>
            </div>
        </>
    )
}