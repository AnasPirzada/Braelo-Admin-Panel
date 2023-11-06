import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const userdataOptions = () => {
  return (
    <div>
      <Row>
        <Col xl={2}>
          <div>
            <select
              name='cars'
              id='cars'
              className='text-muted border border-1 rounded-3 p-2 w-100 '
            >
              <option value='Filter by name'>Filter by name</option>
              <option value='saab'>Saab</option>
              <option value='mercedes'>Mercedes</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
        </Col>
        <Col xl={2}>
          <div>
            <select
              name='cars'
              id='cars'
              className='text-muted border border-1 rounded-3 p-2 w-100 '
            >
              <option value='Filter by location'>Filter by location</option>
              <option value='saab'>Saab</option>
              <option value='mercedes'>Mercedes</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
        </Col>

        <Col xl={3}>
          <div>
            <select
              name='cars'
              id='cars'
              className='text-muted border border-1 rounded-3 p-2 w-100 '
            >
              <option value='Filter by county'>Filter by county</option>
              <option value='saab'>Saab</option>
              <option value='mercedes'>Mercedes</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
        </Col>

        <Col xl={3}>
          <div>
            <select
              name='cars'
              id='cars'
              className='text-muted border border-1 rounded-3 p-2 w-100 '
            >
              <option value='Filter by category'>Filter by category</option>
              <option value='saab'>Saab</option>
              <option value='mercedes'>Mercedes</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
        </Col>
        <Col xl={2}>
          <button
            className='w-100 border-0 p-2 text-white rounded-4'
            style={{ backgroundColor: '#596068' }}
          >
            Filter
          </button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col xl={3}>
          <div>
            <select
              name='cars'
              id='cars'
              className='text-muted border border-1 rounded-3 p-2 w-100 '
            >
              <option value='Filter by subscription'>
                Filter by subscription
              </option>
              <option value='Active'>Active</option>
              <option value='InActive'>In Active</option>
            </select>
          </div>
        </Col>
        <Col xl={9}>
          <div className='border border-1 d-flex p-2 rounded-4 w-100'>
            <input type='search' />
            <img src='./Seacrh.svg' />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default userdataOptions;
