import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import Modal from 'react-bootstrap/Modal';
export const RRCombinedCard = ({ headtitle, backgroundColor, pmodal }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [text, setText] = useState('');
  const [showSendResponseModal, setShowSendResponseModal] = useState(false);

  const openSecondModal = () => {
    setShowSecondModal(true);
  };

  const closeSecondModal = () => {
    setShowSecondModal(false);
  };

  const handleSendResponse = () => {
    setResponseText(text);
    closeSecondModal();
    // Close the parent modal
    // pmodal();
    setText('');
    // Show the "Send Response" modal
    setShowSendResponseModal(true);
  };

  const closeSendResponseModal = () => {
    // Close the "Send Response" modal
    setShowSendResponseModal(false);
  };
  return (
    <>
      <div
        className='p-5'
        style={{
          width: '50rem',
          borderRadius: '18.477px',
          border: '1.848px solid rgba(134, 142, 150, 0.16)',
          backgroundColor: ' #F7F8F9',
        }}
      >
        <Row className='m-2'>
          <div className='d-flex justify-content-between align-items-center p-2'>
            <div
              className='py-2 text-white rounded-5 w-25 text-center my-2'
              style={{ backgroundColor: backgroundColor || '#F7F8F9' }}
            >
              <p>{headtitle}</p>
            </div>
            <div>
              <p>September 15, 2023 at 6pm | iOs | Florida</p>
            </div>
          </div>
        </Row>
        <Row>
          <div className='d-flex justify-content-between align-items-center'>
            <Col xl={8}>
              <div className='d-flex align-items-center '>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                >
                  <img
                    src='./image/userKellyimage.png'
                    alt='User'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
                <div className='ms-3'>
                  <p
                    style={{
                      color: '#75818D',
                      fontSize: '27.459px',
                      fontWeight: '600',
                    }}
                  >
                    Jeferson Silva
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={2}>
              <Rating
                count={5}
                size={24}
                value={3.2}
                edit={false}
                isHalf={true}
                activeColor='#FFD700'
              />
            </Col>
          </div>
        </Row>
        <Row className='mt-4'>
          {responseText ? (
            <div className='mt-3 text-end ' style={{ width: '50rem' }}>
              <p
                style={{
                  color: '#75818D',
                  fontSize: '16.475px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  textAlign: 'left',
                }}
              >
                {responseText}
              </p>
            </div>
          ) : (
            <p>
              Hello, how are you? I'd like to report a problem that happened to
              me when I registered my product on the platform. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          )}
        </Row>

        <Row className='mt-4'>
          <Col className='text-end m-2'>
            <img
              src='./image/card/editCard.svg'
              alt='Edit'
              onClick={openSecondModal}
              role='button'
            />
            <img
              src='./image/card/selectCard.svg'
              alt='Select'
              className='ms-3'
              role='button'
              onClick={() => {
                handleSendResponse();
                openSecondModal();
              }}
            />

            <img
              src='./image/card/imageCard.svg'
              alt='Image'
              className='ms-3'
            />
            <img src='./image/card/delCard.svg' alt='Delete' className='ms-3' />
          </Col>
        </Row>
      </div>
      {showSecondModal && (
        <div className='second-modal-container'>
          <div
            className='mt-5'
            style={{
              width: '50rem',
            }}
          >
            <Row
              className='bg-body p-4 w-100  rounded-4 '
              style={{ height: '30vh' }}
            >
              <textarea
                placeholder='Text goes here'
                className='border-0 w-100 '
                value={text}
                onChange={e => setText(e.target.value)}
              />
            </Row>

            <div
              className='mt-2 text-end'
              style={{
                width: '50rem',
              }}
            >
              <button
                onClick={handleSendResponse}
                className='border-0 p-2 w-25 rounded-3 text-white'
                style={{ backgroundColor: '#868E96' }}
              >
                Send Response
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal show={showSendResponseModal} size='sm' centered>
        just close this prop pmodal(); on handleSendResponse dnt close the
        existing modal
      </Modal>
    </>
  );
};
export default RRCombinedCard;
