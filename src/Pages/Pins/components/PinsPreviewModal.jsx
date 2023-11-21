import React from 'react';
import PinsModal from './pinsModal.jsx';
import { Row, Col } from 'react-bootstrap';
export const PinsPreviewModal = () => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '610px',
        height: '1417px',
        borderRadius: '12px 12px 0 0',
      }}
    >
      <PinsModal />

      <Row className='d-flex justify-content-between align-items-center mt-5 m-auto '>
        <Col xl={4} className='mt-4'>
          <button
            className='w-100 p-3 rounded-5'
            style={{
              color: '#475467',
              border: '1px solid #EAECF0',
              backgroundColor: 'transparent',
            }}
          >
            <img src='./cards/location.svg' alt='' className='me-3' />
            Miami,Fl
          </button>
        </Col>
        <Col xl={5}></Col>
        <Col xl={3} className='mt-4'>
          <p className='my-0'>10 July 2023</p>
        </Col>
      </Row>
      <div
        className='m-auto'
        style={{
          width: '90%',
        }}
      >
        <div className='mt-4'>
          <p className='fs-2' style={{ fontWeight: '600', color: '#101828' }}>
            Lide Business Group
            <br /> Florida
          </p>
          <p style={{ color: '#667085', fontSize: '21.41px' }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            ...
          </p>
        </div>
        <div className='mt-4'>
          <p style={{ color: '#1D96FF', fontSize: '21.41px' }}>Read more</p>
        </div>
        <div>
          <p>Endereço</p>
        </div>
        <div >
          <p>City Hall Square, Florida | Miami | EUA</p>
        </div>
        <div>
          <p>City Hall Square, Florida | Miami | EUA</p>
        </div>
      </div>
    </div>
  );
};
export default PinsPreviewModal;
