import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const ReclainCard = ({ Name, Description, Date, Image }) => {
  return (
    <div className='mt-4' style={{ backgroundColor: '#F4F7F4', width: '100%' }}>
      <div className='text-start p-3'>
        <div
          className='p-2 rounded-5 text-center'
          style={{ backgroundColor: '#CE605A', width: '100px' }}
        >
          <p className='text-white'>Solved</p>
        </div>
      </div>
      <Row>
        <div className='text-center'>
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'inline-block',
            }}
          >
            <img
              src={Image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>
      </Row>

      <Row className='text-center m-4'>
        <p
          style={{
            color: ' #75818D',
            fontSize: '23.995px',
            fontWeight: ' 600',
          }}
        >
          {Name}
        </p>
        <p
          className='mt-3'
          style={{
            color: ' #75818D',
            fontSize: '12.465px',
            fontWeight: ' 500',
          }}
        >
          {Description}
        </p>
        <p
          className='mt-4'
          style={{ color: ' #75818D', fontSize: '10px', fontWeight: ' 700' }}
        >
          {Date}
        </p>
      </Row>

      <Row className='my-5'>
        <div className='mb-5 text-center'>
          <img src='./image/card/delCard.svg' alt='' />
          <img src='./image/card/Solvedcard.svg' alt='' className='ms-4' />
        </div>
      </Row>
    </div>
  );
};
export default ReclainCard;
