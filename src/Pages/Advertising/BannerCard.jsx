import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

const BannerCard = () => {
  return (
    <>
    
        <Card
        className='text-left border-0 bannercard'
        style={{ width: '100%', height: '90%' }}
      >
        <Row className='my-2'>
          <Col className='d-flex justify-content-end me-3'>
            <Badge
              className='bg bg-secondary rounded-circle d-flex justify-content-center align-items-center'
              style={{
                borderRadius: '22px',
                marginLeft: '',
                width: '38px',
                height: '35px',
              }}
            >
              <img
                src='/Group 1000004491.svg'
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt='Icon 1'
              />
            </Badge>

            <Badge
              className='bg bg-secondary d-flex justify-content-center align-items-center '
              style={{
                borderRadius: '22px',
                marginLeft: '10px',
                width: '38px',
                height: '35px',
              }}
            >
              <img
                src='/Pen, Edit.svg'
                style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                alt='Icon 2'
              />
            </Badge>
            <Badge
              className='bg bg-danger d-flex justify-content-center align-items-center'
              style={{
                borderRadius: '22px',
                marginLeft: '10px',
                width: '38px',
                height: '35px',
              }}
            >
              <img
                src='./Trash, Delete, Bin.svg'
                style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                alt='Icon 3'
              />
            </Badge>
          </Col>
        </Row>
        <Card.Body>
          <Card.Title style={{ fontSize: '15px', color: '#fff' }}>
            Advertise your company at Braelo!
          </Card.Title>
          <Card.Text style={{ fontSize: '15px' }}>
            <p className='my-0' style={{ width: '50%', color: '#fff' }}>
              Check out our plans and boost your sales!
            </p>
            <button className='cardbtn rounded-4 p-2 border-0'>
              Advertise Now
            </button>
            <p
              // className='my-0'
              style={{
                fontSize: '10px',
                textAlign: 'right',
                color: '#fff',
                marginBottom: '15px',
              }}
            >
              Joined at 4:33pm by @crissgermano <br />
              Saturday 23 September 2023 - Florida Miami
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    
    
    </>
  )
}

export default BannerCard