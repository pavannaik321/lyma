import {CardGroup,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from "reactstrap"
import Cardimg from "../../images/morning-2243465.jpg"

export default function Journal(){
    return(
        <>
            <div className="journal-div">
                <h2 data-aos='fade-up'>LYMA journals. Your quest for better.</h2>
                <p className="l-customer">What’s the future of beauty? Want to sleep better? Want to feel your absolute best?</p>
                <p className="l-customer">Discover the world of LYMA, the future of wellness and more.</p>
                </div>
                <div className="card-container">
                
                <CardGroup className="class-group">
  <Card className="card1">
    <CardImg className="card-img2"
      alt="Card image cap"
/*       data-aos="zoom-out" data-aos-duration="1500" */
      src={Cardimg}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h3">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <a className="a-tag" href="#">Read More</a>
    </CardBody>
  </Card>
  <Card className="card1">
    <CardImg
    className="card-img2"
      alt="Card image cap"
      /* data-aos="zoom-out" data-aos-duration="1500" */
      src={Cardimg}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h3">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <a className="a-tag" href="#">Read More</a>
    </CardBody>
  </Card>
  <Card className="card1">
    <CardImg
    className="card-img2"
      alt="Card image cap"
/*       data-aos="zoom-out" data-aos-duration="1500" */
      src={Cardimg}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h3">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
        <a className="a-tag" href="#">Read More</a>
    </CardBody>
  </Card>
</CardGroup>
    </div>
    <div className="before-footer">
        <h2 className="before-footer-heading">GENDER NEUTRAL</h2>
        <h2>SIMPLE REGIME</h2>
        <h2>FREE SHIPPING</h2>
        <h2>MADE IN THE UK</h2>
    </div>
            
        </>
    )
}