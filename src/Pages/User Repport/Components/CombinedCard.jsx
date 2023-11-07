import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';

export const RRCombinedCard = () => {
  return (
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
          <div>
            <p>Reclain</p>
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
        <p
          style={{
            color: '#75818D',
            fontSize: '16.475px',
            fontStyle: 'normal',
            fontWeight: '500',
          }}
        >
          Hello, how are you? I'd like to report a problem that happened to me
          when I registered my product on the platform. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially
          unchanged.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
      </Row>
      <Row className='mt-4'>
        <Col className='text-end m-2'>
          <img src='./image/card/editCard.svg' />
          <img src='./image/card/selectCard.svg' className='ms-3' />
          <img src='./image/card/imageCard.svg' className='ms-3' />
          <img src='./image/card/delCard.svg' className='ms-3' />
        </Col>
      </Row>
    </div>
  );
};
export default RRCombinedCard;
