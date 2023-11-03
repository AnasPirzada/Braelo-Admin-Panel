import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import ScheduleConfirmCard from './ScheduleConfirmCard.jsx';
import Modal from 'react-bootstrap/Modal';

export const ScheduleCard = () => {
  const [dateState, setDateState] = useState(new Date());

  const changeDate = e => {
    setDateState(e);
  };
  const [publishModalShow, setPublishModalShow] = useState(false);
  const [newModalShow, setNewModalShow] = useState(false);

  const handlePublishButtonClick = () => {
    setPublishModalShow(false); // Close the current modal
    setNewModalShow(true); // Set the state to show the new modal
  };
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center '>
        <Calendar
          className='rounded-4 '
          value={dateState}
          onChange={changeDate}
        />
      </div>

      <div className='d-block d-md-flex  justify-content-center align-items-center '>
        <div className='column  mt-3'>
          <div>
            <label className='text-white'>Post Date</label>
          </div>
          <div>
            <input
              className='bg-light text-muted rounded-2 p-2'
              type='text'
              id='postDate'
              value={moment(dateState).format('MMMM / Do / YYYY')}
              readOnly
            />
          </div>
        </div>
        <div className='column ms-0  ms-md-3 mt-3'>
          <div className='up-label'>
            <label className='text-white'>Post Time</label>
          </div>
          <div className='down-input '>
            <input
              type='time'
              placeholder='Show Time'
              className='bg-light text-muted  rounded-2 p-2'
            />
          </div>
        </div>
        <div className='w-75 mt-3'>
          <button
            className='text-white w-100 border-0 p-2 rounded-3  ms-0 ms-md-3 mt-4'
            style={{ backgroundColor: '#596068' }}
            type='button'
            variant='secondary'
            centered
            onClick={handlePublishButtonClick}
          >
            Schedule
          </button>
        </div>
        <div>
          <Modal
            show={newModalShow}
            centered
            onHide={() => setNewModalShow(false)}
          >
            <ScheduleConfirmCard />
          </Modal>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ScheduleCard;
