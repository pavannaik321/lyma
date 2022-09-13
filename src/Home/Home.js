import Footer from "../footer/footer";
import Navbar from "./navbar/navbar";
import Imgcomponent from "./imgcomponent/imgcomponent"
import Bodytext from "./body/bodytext";
import Bodyimg from "./bodyimg1/bodyimg1";
import Bodytext1 from "./body/bodytext1";
import Bodyimg2 from "./bodyimg1/bodyimg2";
import Bodytext2 from "./body/bodytext2";
import Ingridents from "./ingridents/ingridents";
import Feel from "./feel/feel";
import Journey from "./journey/journey";
import Special from "./special/special";
import Subscribe from "./subscribe/subscribe";
import Rating from "./rating/Rating";





export default function Home(){
    return(
        <>
        <div className="body" >
{/*             <header>
            <Navbar />
            </header> */}
            <Imgcomponent />
            <Bodytext />
            <Bodyimg />
            <Bodytext1 />
            <Bodyimg2 />
            <Bodytext2 />
            <Ingridents />
            <Feel />
            <Journey />
            <Special />
            <Subscribe />
            <Rating />

{/* 
            <Footer /> */}
            
                
           
            
        </div>
        </>
    )
}