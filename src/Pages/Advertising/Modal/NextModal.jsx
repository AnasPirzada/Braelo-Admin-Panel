import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ConfirmCard from './ConfirmCard.jsx';

const NextModal = ({ onHide }) => {
  const [publishModalShow, setPublishModalShow] = useState(false);
  const [newModalShow, setNewModalShow] = useState(false);

  const handlePublishButtonClick = () => {
    setPublishModalShow(false); // Close the current modal
    setNewModalShow(true); // Set the state to show the new modal
  };
  return (
    <>
      <Col lg={12}>
        <div
          style={{ backgroundColor: '#EE9E03' }}
          className='d-flex w-100 rounded-4 p-1'
        >
          <Col lg={8}>
            <Row>
              <Col lg={11} className='ms-3 mt-3'>
                <h3 className='text-white fs-4'>
                  Advertise your company at Braelo!
                </h3>
              </Col>
            </Row>
            <Row>
              <Col lg={7} className=' ms-3'>
                <p className='text-white'>
                  Check out our plans and boost your sales!
                </p>
              </Col>
            </Row>

            <button
              type='button'
              className='m-3 w-50 border-0 p-1 rounded-5 text-white'
              style={{ background: 'rgba(0, 0, 0, 0.3)' }}
            >
              Advertise now
            </button>
          </Col>
          <Col lg={4}>
            <img src='/public/ModalCardicon.svg' style={{ width: '100%' }} />
          </Col>
        </div>
        <Row className='mt-4'>
          <Col lg={12}>
            <button
              type='button'
              variant='secondary'
              centered
              onClick={handlePublishButtonClick}
              className='ms-2 w-100 rounded-3 p-2 border-0 text-white '
              style={{ backgroundColor: '#596068' }}
            >
              Publish
            </button>
          </Col>
          <div>
            <Modal show={newModalShow} centered onHide={() => setNewModalShow(false)}>
              <ConfirmCard />
            </Modal>
          </div>
        </Row>
      </Col>
    </>
  );
};
export default NextModal;
