import React from 'react';
import { Row } from 'react-bootstrap';
import './faltCard.css';
export const FlatCard = () => {
  return (
    <div
  
      style={{
        borderRadius: ' 27.042px',
        backgroundColor:'#FFEDBF',
        height: '449px',
        width: '100%',
        margin: 'auto',
      }}
    >
      <div className='text-end p-3'>
        <img src='/public/cards/Group 1000004914 (1).svg' alt='' />
      </div>

      <div
        className='text-center w-75 m-auto mb-3 mt-5'
        style={{ borderBottom: '1px solid #EFD89D' }}
      >
        <p
          style={{
            color: '#282928',
            fontFamily: 'AllRoundGothic-Bold',
            fontSize: '48.296px',
            fontWeight: '400',
          }}
        >
          Flat
        </p>
        <p className='mb-4 mt-3 '>
          $ Free
          <span>/month</span>{' '}
        </p>
      </div>
      <div className=' w-75 m-auto mt-4'>
        <p>
          <img
            src='./cards/Categories=Check, Component=Additional Icons.svg'
            alt=''
            className='me-3'
          />
          2 monthly ads
        </p>
        <p>
          <img
            src='./cards/Categories=Check, Component=Additional Icons.svg'
            alt=''
            className='me-3'
          />
          20 monthly highlights
        </p>
      </div>
    </div>
  );
};
export default FlatCard;
