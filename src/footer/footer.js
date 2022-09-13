import "./footer.css"

export default function Footer(){
    return(
    <>
    <div className="footer-main">
    <div data-aos="fade-right"  data-aos-duration="3000" className="footer-body">
        <h2 className="footer-text-heading" >SUPPLEMENT</h2>
        <a>Benefits</a>
        <a>Formula</a>
        <a>Immunity</a>
        <a>Journal</a>
        <a>Reviews</a>
        <a className="buy">Buy</a>
    </div>
       <div data-aos="fade-up" data-aos-duration="3000" className="footer-body">
        <h2 className="footer-text-heading" >LYMA LASER</h2>
        <a>LYMA Laser</a>
        <a>Active Mist</a>
        <a>Priming Serum</a>
        <a>Technology</a>
        <a>Results</a>
        <a>Journal</a>
        <a>Reviews</a>
        <a className="buy">Buy</a>
    </div>  
      <div data-aos="fade-down" data-aos-duration="3000" className="footer-body">
        <h2 className="footer-text-heading" >ABOUT</h2>
        <a>About</a>
        <a>Journal</a>
        <a>FAQs</a>
        <a>Contact</a>
        <a>Terms</a>
        <a>Privacy</a>
        <a>Warranty</a>
        <a>Returns</a>
    </div>
    <div data-aos="fade-left" data-aos-duration="3000"  className="footer-body">
        <h2 className="footer-text-heading" >ACCOUNT</h2>
        <a>Activate</a>
        <a>My subscription</a>
        <a>Add extras</a>
        <a>My orders</a>
        <a>Account details</a>
        <a>Payment method</a>
        <a>Login details</a>
    </div>
{/*     <div className="footer-body">
        <h2 className="footer-text-heading" ></h2>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
    </div> */}
    </div>
    </>
    )
}