import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../../Components/SideBar.jsx';
import NaveBar from '../../Components/NaveBar.jsx';
import BannerTab from './BannerTab';
import ModalCard from './Modal/TextAdd/CreateTextAdd.jsx';
import Modal from 'react-bootstrap/Modal';
const CreateTextAdd = () => {
    //------------------------- Modal---------------------------------------
    const [modalShow, setModalShow] = useState(false);
    const [nextModalShow, setNextModalShow] = useState(false);
  
    // Function to handle opening the "Next" modal
    const handleNextModalShow = () => {
      setModalShow(false); // Close the current modal
      setNextModalShow(true); // Open the "Next" modal
    };
  return (
    <>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            xs={2}
            md={2}
            className='text-center p-0'
            style={{ backgroundColor: '#495057', height: '100vh' }}
          >
            <SideBar activetabe='Advertising' />
          </Col>
          <Col md={10} xs={10} style={{ height: '100vh', overflowY: 'auto' }}>
            <Row>
              <NaveBar />
            </Row>
            <Row>
              <BannerTab activeBtn='newAdd'/>
            </Row>
            <Row className='mt-4'>
              <h4 className='mt-3 text-muted '>Create new Text Ad</h4>
            </Row>
            <Row className='mt-4'>
              <Col lg={6} xl={6} xs={12}>
                <label className='text-muted'>Ad title</label>
                <input
                  placeholder='Immigration Paralegal Services'
                  className='border border-1 rounded-3 p-2 w-100 '
                />
              </Col>
            </Row>
            <Row className='mt-4'>
              <Col lg={6} xl={6} xs={12}>
                <label className='text-muted'>Description</label>
                <textarea
                  placeholder='Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions I'
                  className='border border-1 rounded-3 p-2 w-100 h-100'
                />
              </Col>
            </Row>
            <Row className='mt-4'>
              <Col lg={6} xl={6} xs={12}>
                <Row className='mt-5 justify-content-end'>
                  <Col lg={3} xl={3} xs={12}>
                    <button className='w-100 p-1 border-0 rounded-2 text-dark'>
                      Cancel
                    </button>
                  </Col>
                  <Col lg={3} xl={3} xs={12}>
                    <button
                      variant='secondary'
                      onClick={handleNextModalShow}
                      className=' w-100 p-1 border-0 rounded-2 text-white'
                      style={{ backgroundColor: '#CD9403' }}
                    >
                      Next
                    </button>
                  </Col>
                  <div>
                  <Modal
                    show={nextModalShow}
                    onHide={() => setNextModalShow(false)}
                    centered
                  >
                    <ModalCard onHide={() => setNextModalShow(false)} />
                  </Modal>
                </div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateTextAdd;