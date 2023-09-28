import { Col, Container, Row } from "react-bootstrap"
import SideBar from "../../Components/SideBar"

const Pins = () => {
  return (
    <>
    <Container fluid className="  h-100" >
      <Row>
        <Col xs={2} md={2} className="text-center p-0" style={{backgroundColor:'#495057' , height:'100vh'}}>
          
          <SideBar
            activetabe="Pins"
          />
        </Col>
        <Col xs={10} md={10}>
        Pins
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Pins