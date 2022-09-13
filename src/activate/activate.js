import "./activate.css"

export default function Activate(){
    return(
        <>
        <div className="activate-body">
        <div className="body-text-body">
        <div data-aos='fade-down' /* data-aos-easing="linear" */
     data-aos-duration="1500" className="body-text-main">
        <div className="body-text-container2">
        <h2>Activate your account.</h2>
        <p>If you purchased your LYMA Starter Kit from one of our retail partners, or received it as a gift, you will need to activate your account to purchase LYMA refills.</p>
        <p>Please enter your 6 digit member ID, which can be found on the reverse of your LYMA authenticity card below.</p>
        </div>
        <div className="active-main">
            <h2 className="active-heading">Please enter your 6 digit member ID</h2>
            <div className="active-container">
                <div className="active-input-box">
                    <input className="input-1" maxlength="1"></input>
                    <input className="input-1" maxlength="1"></input>
                    <input className="input-1" maxlength="1"></input>
                </div>
                <div className="active-input-box">
                    <input className="input-1" maxlength="1"></input>
                    <input className="input-1" maxlength="1"></input>
                    <input className="input-1" maxlength="1"></input>
                </div>
            </div>
            <button className="active-button">ACTIVATE</button>
            <div className="body-text-container3">
        <h2 className="act-head">CAN'T FIND YOUR MEMBER ID</h2>
        <p>Misplaced your authenticity card? Please contact a member of our concierge team.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}