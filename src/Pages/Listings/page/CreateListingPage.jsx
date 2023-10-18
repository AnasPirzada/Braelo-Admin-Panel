import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const CreateListingPage = () => {
  return (
    <div>
      <Row>
        <Row>
          <h2 className='text-muted pt-4'>Create new Listing</h2>
        </Row>
        <Row>
          <div>
            <label className='text-muted'>Listing Title</label>
            <input
              placeholder='Immigration Paralegal Services'
              className='border border-1 rounded-3 p-2 w-100 '
            />
          </div>
        </Row>
        <Row>
          
            <Col lg={6} xs={12}>
              <label className='text-muted'>Description</label>
              <input
                placeholder='Get to know Legally and Co services and ask your questions, Get to know Legally and Co services and ask your questions, Get to know Legally and Co services and ask your questions I'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </Col>
            <Col lg={6} xs={12}>
              <label className='text-muted'>
                Keywords <span>(Words or categories related to this item)</span>
              </label>
              <input
                placeholder='(Words or categories related to this item)'
                className='border border-1 rounded-3 p-2 w-100 '
              />
            </Col>
          
        </Row>
        <Col></Col>
      </Row>
    </div>
  );
};
export default CreateListingPage;
