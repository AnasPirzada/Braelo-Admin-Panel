import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ConfirmCard = () => {
  const [isSectionOpen, setSectionOpen] = useState(true);

  const handleCloseSection = () => {
    setSectionOpen(false);
  };

  return (
    <>
      {isSectionOpen && (
        <div
          className='bg-white text-center rounded-4 '
          style={{ height: '650px' }}
        >
          <Row>
            <Col
              className='d-flex justify-content-end'
              onClick={handleCloseSection}
            >
              <img
                src='/public/X sign.svg'
                alt='exit'
                style={{ width: '10%', cursor: 'pointer' }}
                className=''
              />
            </Col>
          </Row>
          <Row className='justify-content-center mt-5'>
            <Col className='mt-4'>
              <img
                className='mt-5'
                src='/public/checkicon.svg'
                alt='checkIcon'
              />
            </Col>
          </Row>
          <Row>
            <Col className='mt-4'>
              <h2>Wonderful!</h2>
            </Col>
          </Row>
          <Row>
            <Col xl={2}></Col>
            <Col xl={8} className='mt-3'>
              <p>Your highlight has been published successfully!</p>
            </Col>
            <Col xl={2}></Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default ConfirmCard;
