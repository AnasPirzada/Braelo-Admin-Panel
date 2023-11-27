import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import PinsPreviewModal from '../components/PinsPreviewModal.jsx';
import './PinsCard.css';
export const PinsCard = ({ backgroundImage, TitleP, ProfileImage }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card
        className='text-left border-0 backgroundofCard mt-4'
        style={{
          width: '100%',
          height: '183.4px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: ' cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        role='button'
        variant='primary'
        onClick={handleShow}
      >
        <Row className='my-2'>
          <Col className='d-flex justify-content-end me-3'>
            <img src='./PinsImages/Group 1000004492.svg' />
            <img src='./PinsImages/Group 1000004486.svg' />
            <img src='./PinsImages/Group 1000004490.svg' />
          </Col>
        </Row>
        <Card.Body>
          <Card.Title
            style={{
              fontSize: '16.67px',
              color: '#fff',
              fontWeight: '600',
              fontFamily: 'PlusJakartaSans-Bold',
              width: '30%',
            }}
          >
            {TitleP}
          </Card.Title>
          <Card.Text
            className='d-flex justify-content-start  align-items-center mt-4'
            // style={{ fontSize: '15px' }}
          >
            <div>
              {/* <img src='./PinsImages/Rectangle 23835.svg' alt='' /> */}
              <img src={ProfileImage} alt='' />
            </div>
            <div className='ms-2'>
              <p
                className='my-0'
                style={{ width: '60%', color: '#FFFFFF', fontSize: '9px' }}
              >
                Created at 4:33pm by @crissgermano Saturday 23 September 2023 -
                Florida Miami
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={show} centered onHide={handleClose}>
        <PinsPreviewModal />
      </Modal>
    </div>
  );
};

export default PinsCard;
