import { Col, Container, Row } from "react-bootstrap"
import SideBar from "../../Components/SideBar"


const UserRepport = () => {
  return (
    <>
    <Container fluid className="  h-100" >
      <Row>
        <Col xs={2} md={2} className="text-center p-0" style={{backgroundColor:'#495057' , height:'100vh'}}>
          
          <SideBar
           activetabe="UserRepport"
          
          />
        </Col>
        <Col xs={10} md={10}>
        UserRepport
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default UserRepport