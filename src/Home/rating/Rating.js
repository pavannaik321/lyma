
import Journal from "./journal"
import "./rating.css"

export default function Rating(){
    return(
        <>
        <div className="rating-container">
            <h2 className="rating-header">RATINGS & REVIEWS</h2>
            <hr className="hr"></hr>
            <div data-aos='fade-right' className="rating-items">
                <div className="r1">
                    <p>Alison. C.</p>
                </div>
                <div className="r1">
                    <p>Motivation and mood improvements.</p>
                    <p className="l-customer">Hair, skin and nails! Great.</p>
                </div>
                <div className="r1">
                    <p>Quality</p>
                    <p>Value</p>
                </div>
                <div className="r1">
                    <p className="l-customer">Good</p>
                    <p className="l-customer">Good</p>
                </div>
            </div><hr className="hr"></hr>
            <div data-aos='fade-left' className="rating-items">
            <div className="r1">
                    <p>Will. H.</p>
                </div>
                <div className="r1">
                    <p>Better productivity.</p>
                    <p className="l-customer">I feel like my productivity has gone up 20%!</p>
                </div>
                <div className="r1">
                    <p>Quality</p>
                    <p>Value</p>
                </div>
                <div className="r1">
                    <p className="l-customer">Very good</p>
                    <p className="l-customer">Excellent</p>
                </div>
            </div><hr className="hr"></hr>
            <div data-aos='fade-right' className="rating-items">
            <div className="r1">
                    <p>Gloria. J.</p>
                </div>
                <div className="r1">
                    <p>Better sleep immediately.</p>
                    <p className="l-customer">Taken it for just 2 days ... I slept well for first time in months both nights!!</p>
                </div>
                <div className="r1">
                    <p>Quality</p>
                    <p>Value</p>
                </div>
                <div className="r1">
                    <p className="l-customer">Good</p>
                    <p className="l-customer">Good</p>
                </div>
            </div><hr className="hr"></hr>
            <p className="l-customer">All reviews are from LYMA customers.</p>
        </div>
        <Journal />
        </>
    )
}