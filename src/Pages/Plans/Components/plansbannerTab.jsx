import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const planbannerTab = () => {
  return (
    <div>
      <Row className='mt-4 border-bottom pb-3'>
        <Col xl={8} lg={9} xs={3}>
          <h3 className='text-muted'>Plans</h3>
        </Col>
        <Col xl={2} lg={2} xs={9}>
          <button
            className='border-0 p-3 w-100 text-white rounded-3'
            style={{
              backgroundColor: '#596068',
              fontSize: '16.268px',
            }}
          >
            New plan
          </button>
        </Col>
        <Col xl={2} lg={2} xs={12}>
          <button
            className='border-0 p-3 w-100 text-white rounded-3 mt-3 mt-md-0'
            style={{
              backgroundColor: '#868E96',
              fontSize: '16.268px',
            }}
          >
            New user
          </button>
        </Col>
      </Row>
    </div>
  );
};
export default planbannerTab;
