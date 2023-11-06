import React from 'react';
import Options from '../components/userdataOptions.jsx';
import { Row, Col } from 'react-bootstrap';
import UsersCard from '../components/UserCard.jsx';
export const Userdata = () => {
  return (
    <div className='my-5' style={{ height: '250vh' }}>
      <Row className='mt-4'>
        <Options />
      </Row>
      <Row
        className='mt-5 m-2 rounded-4 '
        style={{ backgroundColor: '#F5F7F9', height: '40vh' }}
      >
        <div className='text-center '>
          <p
            className='mt-5 pt-5'
            style={{
              color: ' #78828A',
              fontSize: ' 28px',
              fontStyle: ' normal',
              fontWeight: '700',
            }}
          >
            We found 856 results
          </p>
          <p
            className='mt-1'
            style={{
              color: ' #78828A',
              fontSize: ' 28px',
              fontStyle: ' normal',
              fontWeight: '500',
            }}
          >
            for these items.
          </p>
          <div className='d-flex justify-content-center align-items-center mt-4'>
            <p
              style={{
                color: ' #78828A',
                fontSize: ' 20px',
                fontStyle: ' normal',
                fontWeight: '700',
              }}
            >
              900k{' '}
              <span
                style={{
                  color: ' #78828A',
                  fontSize: ' 20px',
                  fontStyle: ' normal',
                  fontWeight: '500',
                }}
              >
                users
              </span>
            </p>
            <p
              className='ms-3'
              style={{
                color: ' #78828A',
                fontSize: ' 20px',
                fontStyle: ' normal',
                fontWeight: '700',
              }}
            >
              199k
              <span
                style={{
                  color: ' #78828A',
                  fontSize: ' 20px',
                  fontStyle: ' normal',
                  fontWeight: '500',
                }}
              >
                Listings
              </span>
            </p>
            <p
              className='ms-3'
              style={{
                color: ' #78828A',
                fontSize: ' 20px',
                fontStyle: ' normal',
                fontWeight: '700',
              }}
            >
              80k
              <span
                style={{
                  color: ' #78828A',
                  fontSize: ' 20px',
                  fontStyle: ' normal',
                  fontWeight: '500',
                }}
              >
                ads
              </span>
            </p>
            <p
              className='ms-3'
              style={{
                color: ' #78828A',
                fontSize: ' 20px',
                fontStyle: ' normal',
                fontWeight: '700',
              }}
            >
              91k
              <span
                style={{
                  color: ' #78828A',
                  fontSize: ' 20px',
                  fontStyle: ' normal',
                  fontWeight: '500',
                }}
              >
                pins
              </span>
            </p>
          </div>
        </div>
      </Row>
      <Row className='mt-5' >
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
        <Col xl={6}>
          <UsersCard />
        </Col>
      </Row>
    </div>
  );
};
export default Userdata;
