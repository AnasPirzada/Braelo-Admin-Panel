
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
// import AdvTabs from './AdvTabs';
import AdvTabs from './AdvTabs';

const BannerTab = () => {
  return (
   <>
   
   <Container className=''>
        <Row className='mt-4 border-bottom pb-3  '>
          <Col md={5} sm={3}>
            <h3 className='text-muted'>Advertising</h3>
          </Col>
          <Col md={1} xs={4} className='text-center'>
            <Badge className='bg bg-secondary' sm={3}>
              <img src='./fillter.svg' style={{ padding: '10px' }} />
            </Badge>
          </Col>
          <Col md={2} xs={8}>
            <h3
              className='d-flex align-items-center justify-content-center fs-6 rounded-2'
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#CD9403',
                color: 'white',
              }}
            >
              New Banner
            </h3>
          </Col>
          <Col md={2} xs={6}>
            <Badge className='d-flex align-items-center justify-content-center fs-6  bg bg-light w-100 h-100 text-secondary mt-md-0 mt-2 p-3'>
              New Spotlight
            </Badge>
          </Col>
          <Col md={2} xs={6}>
            <Badge className='d-flex align-items-center justify-content-center fs-6  bg bg-light w-100 h-100 text-secondary mt-md-0 mt-2 p-3'>
              Text Add
            </Badge>
          </Col>
        </Row>
        <Row>
         <AdvTabs/>
        </Row>
      </Container>
   
   </>
  )
}

export default BannerTab