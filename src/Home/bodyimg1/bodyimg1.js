import "./bodyimg1.css"
import bodyimg from "../../images/tangerines-3105628.jpg"

export default function Bodyimg() {
    return(
        <>
        <div className="body-img">
            <img data-aos='fade-up' src={bodyimg}></img>
        </div>
        </>
    )
}

