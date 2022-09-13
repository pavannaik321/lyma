import "./login.css"
import {Form,FormGroup,Label,Input,Button} from "reactstrap"

export default function Login(){
    return(
        <>
        <div data-aos="fade-down" className="login-container">
            <h2>LOGIN</h2>
        <Form data-aos="flip-left" data-aos-duration="1000" inline className="form1">
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="exampleEmail"
    >
      Email :
    </Label>
    <Input className="inp"
      id="exampleEmail"
      name="email"
      placeholder="something@idk.cool"
      type="email"
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="examplePassword"
    >
      Password :
    </Label>
    <Input className="inp1"
      id="examplePassword"
      name="password"
      placeholder="don't tell!"
      type="password"
    />
  </FormGroup>
  <div className="button-container">
  <Button className="active-button1">
    LOGIN
  </Button>
  </div>
  <div>
  <a className="a2 button-container5" href="#">Forgot Password?</a>
  </div> 
</Form>
        </div>
        
        </>
    )
}