import pills2 from "../../images/pills2.webp"

export default function Lymaspecial(){
    return(
        <>
        <div className="lyma-container">
            <h2 data-aos="zoom-in-up" className="lyma-h2">What's so special about LYMA?</h2>
            <div className="body-img">
            <img data-aos='fade-up' src={pills2}></img>
        </div>
        <div className="lyma-text">
        <h4>LYMA HAS CHANGED THE WAY THE WORLD LOOKS AT SUPPLEMENTS.</h4>
        <p>The lack of regulation means that the industry is awash with low-quality products that deliver little or no benefit with bold claims and no real evidence to support them.</p>
        <p>LYMA is different. We refuse to work with unproven ingredients that offer nothing outside of hope and hype.</p>
        <p>LYMA is the first supplement company to use nine of the best, patented ingredients, proven in over 200 peer-reviewed clinical trials to restore ultimate balance and enable you to start feeling your best.</p>
        <p>This is the LYMA difference. No other supplement comes close.</p>
        </div>
        <div className="lyma-links">
            <hr className="hr"></hr>
            <p data-aos="fade-left">WHY DOES LYMA COST £149/GBP?</p><hr className="hr"></hr>
            <p data-aos="fade-right">WHY THE WORDS ‘CLINICALLY TESTED’ ARE OFTEN MEANINGLESS.</p><hr className="hr" ></hr>
            <p data-aos="fade-left">WHY WE CREATED LYMA AS ONE FORMULA TO FIT ALL?</p><hr className="hr"></hr>
        </div>
        </div>
        </>
    )
}