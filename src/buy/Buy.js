import "./buy.css"
import {CardGroup,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from "reactstrap"
import Cardimg from "../images/morning-2243465.jpg"

export default function Buy(){
    return(
        <>
            <div>
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
        </>
    )
}