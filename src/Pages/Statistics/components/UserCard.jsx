import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './userCard.css';
export const UsersCard = () => {
  return (
    <Row className='ms-0 ms-md-2'>
      <div
        className='mt-4 d-flex flex-column'
        style={{ borderRadius: '11.928px', backgroundColor: '#F5F7F9' }}
      >
        <Col xl={12}>
          <div className='text-end'>
            <p className=' p-2 text-muted'>
              <img src='./greenActive.svg' className='me-3' />
              Active subscription
            </p>
          </div>
        </Col>
        <Col className='d-flex' xl={12}>
          <Col xl={3} className='mb-4'>
            <img
              className='userImage'
              src='https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
              }}
            />
          </Col>
          <Col xl={6} className='ms-3 ms-md-0'>
            <p
              className=' titleuser fw-bold '
              style={{
                color: '#78828A',
                fontSize: '21px',
              }}
            >
              Criss Germano
            </p>
            <p
              className='mt-1 title2user'
              style={{
                color: '#78828A',
                fontSize: '19px',
              }}
            >
              Consumer
            </p>
            <p
              className='mt-0 mt-md-4 puser'
              style={{
                color: '#78828A',
                fontSize: '15px',
              }}
            >
              Active since Sept. 12, 2023 at 4:32 pm
            </p>
          </Col>

          <Col className='text-center mt-5' xl={3}>
            <img
              src='./usereyes.svg'
              className='p-3 ms-0 ms-md-4 usericon'
              style={{
                width: '65px',
                backgroundColor: '#DEE2E6',
                borderRadius: '50%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
              }}
            />
          </Col>
        </Col>
      </div>
    </Row>
  );
};
export default UsersCard;
