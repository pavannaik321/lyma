import "./ingrident.css"
import IngridentCard from "./ingridentsmain/ingridentcard";

import Ingridentheading from "./ingridentsmain/ingridentheading";
import Ingridentimg from "./ingridentsmain/ingridentimg";

export default function Ingridents(){
    return(
        <>
        <div className="ingrident">
            <Ingridentheading />
            <IngridentCard />
            <Ingridentimg />
        </div>
        </>
    )
}