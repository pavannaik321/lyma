import "./help.css"
import Tablet from "../images/tablet-1075790.jpg"

export default function Help() {
    return (
        <>
            <div className="main-image-container">
                <img className="main-img" data-aos="zoom-out" data-aos-duration="1500" src={Tablet}></img>
                <div className="img-text">
                    <div data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                    <h2 >Welcome to FAQs.</h2>
                    <p className="help-text">Answers to the most frequently asked questions about our products and services can be found here. To get started, select a category below or use the search to find what you are looking for.</p>
                    <input  className="input" type="text" placeholder="Search all FQAs"></input>
                    <div className="help-container">
                            <h2 className="help-tags">SUPPLEMENT</h2>
                            <h2 className="help-tags">LASER</h2>
                            <h2 className="help-tags">SUBSCRIPTIONS</h2>
                            <h2 className="help-tags">SHIPPING</h2>
                            <h2 className="help-tags">PAYMENT & RETURNS</h2>
                    </div>
                </div>
            </div>
            </div>
            <div className="lyma-links">
            <h2 data-aos="fade-right" className="help-tags1">Top Questions</h2>
            <hr className="hr"></hr>
            <p data-aos="fade-left">WHY DOES LYMA COST £149/GBP?</p><hr className="hr"></hr>
            <p data-aos="fade-right">WHY THE WORDS ‘CLINICALLY TESTED’ ARE OFTEN MEANINGLESS.</p><hr className="hr" ></hr>
            <p data-aos="fade-left">WHY WE CREATED LYMA AS ONE FORMULA TO FIT ALL?</p><hr className="hr"></hr>
        </div>
        </>
    )
}