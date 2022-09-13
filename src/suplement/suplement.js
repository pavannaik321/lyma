import IngridentCard from "../Home/ingridents/ingridentsmain/ingridentcard";
import Ingridentimg from "../Home/ingridents/ingridentsmain/ingridentimg";
import Rating from "../Home/rating/Rating";
import Subscribe from "../Home/subscribe/subscribe";
import Discover from "./discover";
import Journeyafter from "./journeyafter";
import Supcard from "./supcard";
import Supcard1 from "./supcard1";
import Supimg from "./supimg";
import "./suplement.css"
import Suplespecial from "./suplespecial";
export default function Suplement(){
    return(
        <>
        <div>
            <Supimg />
            <Journeyafter />
            <div className="div">
            <h2 data-aos='fade-up'>Nine powerful ingredients. One ultimate formula.</h2>
            <p className="p">LYMA was created to change lives. Now discover what LYMA can do for you.</p>
            <IngridentCard />
            <Ingridentimg />
            </div>
            <Supcard />
            <Supcard1 />
            <Discover />
            <Suplespecial />
            <Subscribe />
            <Rating />
        </div>
        </>
    )
}