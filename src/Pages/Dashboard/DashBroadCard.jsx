import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const DashBroadCard = () => {
  return (
   <>
  <Container className='w-100'>
        <Row>
          <Col lg={12}>
            <Card
              className=''
              style={{
                width: '100%',
                height: ' 224px',
                borderRadius: '22px',
               backgroundColor:'#EE9E03'
              }}
            >
              <Card.Body>
                <Row className='d-flex justify-content-between align-items-end'>
                  <Col lg={9}></Col>
                  <Col lg={3}>
                    <button
                      type='button'
                      style={{
                        backgroundColor: '#F5C12B',
                        border: 'none',
                        borderRadius: '22px',
                        width: '100%',
                        color:'#634802'
                      }}
                    >
                      <img
                        className='m-2'
                        src='./media-library-folder.1.svg'
                        alt='edit btn-logo'
                      />
                      Edit
                    </button>
                  </Col>
                </Row>
                <div className='text-white  ' >
                  <Card.Title style={{marginTop:'60px'}}>
                    Advertise your company on Braelo!
                  </Card.Title>
                  <Card.Text >
                    Check out our plans and boost your sales!
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
   
   </>
  )
}

export default DashBroadCard