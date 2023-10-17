import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ConfirmCard from './confirm.jsx';
export const CreateTextAdd = () => {
  const [publishModalShow, setPublishModalShow] = useState(false);
  const [newModalShow, setNewModalShow] = useState(false);

  const handlePublishButtonClick = () => {
    setPublishModalShow(false); // Close the current modal
    setNewModalShow(true); // Set the state to show the new modal
  };
  return (
    <>
      <div
        className='rounded-3'
        style={{
          background: ' rgb(0,0,0)',
          background:
            'linear-gradient(0deg, rgba(73, 80, 87, 0.75), rgba(73, 80, 87, 0.75)), linear-gradient(95.42deg, #000000 2.45%, #CD9403 105.69%)',
        }}
      >
        <Row className='p-5 text-white'>
          <h2>Advertise your business!</h2>
          <p className='p-3 '>
            Choose the plan according to your business needs and get access to
            exclusive benefits!
          </p>
        </Row>
      </div>
      <Row>
        <Col xs={12}>
          <button
            className='border-0 w-100 rounded-2 text-white p-2 m-auto mt-4'
            style={{ backgroundColor: '#CD9403' }}  variant='secondary'
            onClick={handlePublishButtonClick}
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
    </>
  );
};
export default CreateTextAdd;
