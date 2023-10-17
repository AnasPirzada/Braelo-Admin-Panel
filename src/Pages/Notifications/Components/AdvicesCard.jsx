import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const AdvicesCard = () => {
  return (
    <div
      className='text-center mt-3 w-100 rounded-3         '
      style={{ backgroundColor: '#868E96' }}
    >
      <Row>
        <div className='text-end my-2'> 
          <img
            src='/public/editadvice.svg'
            alt='edit Icon'
            style={{ width: '30px' }}
          />
          <img
            src='/public/deladvice.svg'
            alt='del Icon'
            style={{ width: '30px' }}
            className='me-2 ms-2'
          />
        </div>
      </Row>
      <h5 className='text-white'>Your account is temporarily suspended.</h5>
      <p className='text-white  p-2'>
        It appears that you have violated one of the platform's rules. To find
        out more, please contact support.
      </p>
    </div>
  );
};
export default AdvicesCard;
