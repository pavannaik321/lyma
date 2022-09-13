import "./feel.css"
import Feelcard from "./feelcard"
import Feeltext from "./feeltext"

export default function Feel(){
    return(
        <>
        <div className="feel">
            <Feeltext />
            <Feelcard />
        </div>
        </>
    )
}