import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import Modal from 'react-bootstrap/Modal';
import Confirm from './ConfirmMessage.jsx';
import DeletedSelection from '../../Listings/components/DeleteItemcard.jsx';
export const RRCombinedCard = ({ headtitle, backgroundColor, pmodal }) => {
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // New modal state

  const [text, setText] = useState('');

  const handleShowFirstModal = () => {
    setShowFirstModal(true);
  };

  const handleCloseFirstModal = () => {
    setShowFirstModal(false);
  };

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditButtonClick = () => {
    handleShowSecondModal();
    handleShowFirstModal();
  };
  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteButtonClick = () => {
    handleShowDeleteModal(); // Open the new delete modal
    handleCloseFirstModal(); // Close the current modal
  };
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  return (
    <>
      {showFirstModal && (
        <div
          className='p-5 mobilewidth'
          style={{
            width: '150%',
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
                <p className='fontres'>{headtitle}</p>
              </div>
              <div>
                <p className='fontres'>
                  September 15, 2023 at 6pm | iOs | Florida
                </p>
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
              <Col xl={2} xs={12}>
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
          </Row>

          <Row className='mt-4'>
            <Col className='text-end m-2'>
              <img
                src='./image/card/editCard.svg'
                alt='Edit'
                onClick={handleEditButtonClick}
                role='button'
              />
              <img
                src='./image/card/selectCard.svg'
                alt='Select'
                className='ms-3'
              />

              <img
                src='./image/card/imageCard.svg'
                alt='Image'
                className='ms-3'
              />
              <img
                src='./image/card/delCard.svg'
                alt='Delete'
                onClick={handleDeleteButtonClick}
                role='button'
                className='ms-3'
              />
            </Col>
          </Row>
        </div>
      )}
      {showSecondModal && (
        <div className='second-modal-container ms-3'>
          <div
            className='mt-5 mobilewidth'
            style={{
              width: '150%',
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
            <Row>
              <Col xl={8}></Col>
              <Col xs={12} xl={4} className='mt-4 '>
                {/* <div
                className='mt-2 text-end'
                style={{
                  width: '100%',
                }}
              > */}
                <button
                  onClick={() => {
                    handleCloseSecondModal();
                    handleCloseFirstModal();
                    handleShowModal();
                    // pmodal();
                  }}
                  className='border-0 p-2 w-100 rounded-3 text-white'
                  style={{ backgroundColor: '#868E96' }}
                >
                  Send Response
                </button>
                {/* </div> */}
              </Col>
            </Row>
          </div>
        </div>
      )}

      {showModal && (
        <Modal show={showModal} centered>
          <Confirm onHide={handleCloseModal} />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal show={showDeleteModal} centered>
          <DeletedSelection onHide={handleClose} />
        </Modal>
      )}
    </>
  );
};
export default RRCombinedCard;
