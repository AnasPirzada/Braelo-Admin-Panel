import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const BannerTab = () => {
  return (
    <div>
      <Row className='mt-4 border-bottom pb-3'>
        <Col xl={10} lg={9} xs={12}>
          <h3 className='text-muted'>Statistics Highlights</h3>
        </Col>
        <Col xl={2} lg={3} xs={12}>
          <button
            className='border-0 p-3 w-100 text-white rounded-4'
            style={{
              backgroundColor: '#596068',
              fontSize: '16.268px',
            }}
          >
            <img
              src='./filterbuttonicon.svg'
              alt='copybutton'
              width='15%'
              className='me-3'
            />
            Filter
          </button>
        </Col>
      </Row>
    </div>
  );
};
export default BannerTab;
