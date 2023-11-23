import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import './PinsCard.css';
export const PinsCard = () => {
  return (
    <div>
      <Card
        className='text-left border-0 backgroundofCard'
        style={{ width: '100%', height: '90%' }}
      >
        <Row className='my-2'>
          <Col className='d-flex justify-content-end me-3'>
            <Badge
              className='bg bg-secondary rounded-circle d-flex justify-content-center align-items-center'
              style={{
                borderRadius: '22px',
                marginLeft: '',
                width: '38px',
                height: '35px',
              }}
            >
              <img
                src='/Group 1000004491.svg'
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt='Icon 1'
              />
            </Badge>
            <Badge
              className='bg bg-secondary d-flex justify-content-center align-items-center '
              style={{
                borderRadius: '22px',
                marginLeft: '10px',
                width: '38px',
                height: '35px',
              }}
            >
              <img
                src='/Pen, Edit.svg'
                style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                alt='Icon 2'
              />
            </Badge>

            <Badge
              className='bg bg-danger d-flex justify-content-center align-items-center'
              style={{
                borderRadius: '22px',
                marginLeft: '10px',
                width: '38px',
                height: '35px',
              }}
            >
              <img
                src='./Trash, Delete, Bin.svg'
                style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                alt='Icon 3'
              />
            </Badge>
          </Col>
        </Row>
        <Card.Body>
          <Card.Title
            style={{
              fontSize: '16.67px',
              color: '#fff',
              fontWeight: '600',
              fontFamily: 'AllRoundGothic-Bold',
            }}
          >
            Jordan Vehicles Store
          </Card.Title>
          <Card.Text
            className='d-flex justify-content-start  align-items-center mt-5'
            style={{ fontSize: '15px' }}
          >
            <div>
              <img src='./PinsImages/Rectangle 23835.svg' alt='' />
            </div>
            <div className='ms-2'>
              <p
                className='my-0'
                style={{ width: '60%', color: '#FFFFFF', fontSize: '8px' }}
              >
                Created at 4:33pm by @crissgermano Saturday 23 September 2023 -
                Florida Miami
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PinsCard;
