import Coffee from "../../images/coffee-6632524.jpg"
export default function Subscribeitems(){
    return(
        <>
      <div className="subscribe-main">
      <img className="main"   src={Coffee}></img>
      <div data-aos-duration="1500" data-aos="fade-up" className="flex" >
      <h2 >The ultimate subscription.</h2>
      <p>Delivered monthly.Free shipping worldwide.No commitment.Pause or cancel any time.</p>
    <p>£149/GBP/mo</p>
    <button className="active-button3">BUY</button>
    <div>
    <p>Also available at</p>
    </div>
      </div>
      </div>
        </>
    )
}