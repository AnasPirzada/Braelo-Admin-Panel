import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const CreateNewUser = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          <p className='mt-3 fs-5' style={{ color: '#78828A' }}>
            Create new user
          </p>
          <div className='mt-3'>
            <p style={{ color: '#78828A' }}>Profile Picture</p>
            <div className='mt-4 '>
              <div
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '10px solid #CD9403',
                }}
              >
                <img
                  src='
                  https://img.freepik.com/free-photo/portrait-playful-young-brunette-woman-with-wavy-hair-looking-camera-isolated-dark-background_639032-153.jpg?w=740&t=st=1699881914~exp=1699882514~hmac=bac798b14ee5487cde13b7c2e7e3e2758c8ec6f1745603781760aa6ca431f09d
                  '
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    overflow: 'hidden',
                  }}
                  alt=''
                />
              </div>
              <div
                style={{
                  backgroundColor: '#CD9403',
                  width: '55px',
                  height: '55px',
                  borderRadius: '50%',
                  transform: 'translateY(-60px) translateX(150px)',
                  border: '5px solid #fff',
                }}
              >
                <img
                  src='./Layer 2.svg'
                  alt=''
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    overflow: 'hidden',
                  }}
                />
              </div>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-start align-items-start w-100'>
            <label className='text-muted mb-2'>Name</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='Criss Germano'
            />
            <label className='text-muted mt-4 mb-2'>E-mail</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='criss@braelo.co'
            />
            <label className='text-muted mt-4 mb-2'>Phone</label>
            <input
              type='text'
              className='p-3 border rounded-4 w-100'
              placeholder='+1 (339) 215-9749'
            />
            <div className='d-flex justify-content-between align-items-center'>
              <div className=' w-100'>
                <label className='text-muted mt-4 mb-2'>Password</label>
                <input
                  type='text'
                  className='p-3 border rounded-4 w-100'
                  placeholder='**********'
                />
              </div>
              <div className=' w-100'>
                <label className='text-muted mt-4 mb-2'>Function</label>
                <select className='p-3 border rounded-4 w-100'>
                  <option value=''></option>
                  <option>gitHub</option>
                  <option>LinkedIn</option>
                  <option>Grepper</option>
                  <option>i don't want to do that </option>
                    
                </select>
              </div>
            </div>
          </div>
          <div className='mb-5 mt-3'>
            <button
              className='border w-25 p-2 rounded-3 text-white'
              style={{ backgroundColor: '#868E96' }}
            >
              Save
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default CreateNewUser;
