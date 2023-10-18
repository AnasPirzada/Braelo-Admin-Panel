import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../../Components/SideBar.jsx';
import NaveBar from '../../Components/NaveBar.jsx';
import BannerTab from './BannerTab';
import ModalCard from './Modal/NextModal.jsx';
import Modal from 'react-bootstrap/Modal';
const CreateBanner = () => {
  // const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [keywords, setKeywords] = useState([
    'Pub',
    'Restaurant',
    'Beauty Salon',
    'Bar',
    'DJ',
    'Coffeshop',
    'Bakery',
    'Language School',
    'Technical Course ',
    'Barbershop',
    'Party Room',
    'Studio',
  ]);
  const addKeyword = () => {
    if (keywordInput.trim() !== '') {
      setKeywords([...keywords, keywordInput]);
      setKeywordInput('');
    }
  };

  const removeKeyword = index => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    // Trigger the file input when the icon is clicked
    fileInputRef.current.click();
  };

  const handleFileSelected = e => {
    const selectedFile = e.target.files[0];
    // Do something with the selected file (e.g., upload or display it)
  };
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
              <BannerTab  activeBtn='newBanner'/>
            </Row>
            <Row>
              <h4 className='mt-3 text-muted '>Create new banner</h4>
            </Row>
            <Row>
              <Col xl={6} xs={12}>
                <div>
                  <h6 className='text-muted'>Ad title</h6>
                  <input
                    placeholder='Immigration Paralegal Services'
                    className='border border-1 rounded-3 p-2 w-100 '
                  />
                </div>
              </Col>
              <Col xl={6} xs={12}>
                <div>
                  <h6 className='text-muted'>Button Link</h6>
                  <input
                    placeholder='Immigration Paralegal Services'
                    className='border border-1 rounded-3 p-2 w-100 '
                  />
                </div>
              </Col>
            </Row>
            <Row className='mt-4'>
              <Col xl={6} xs={12}>
                <div className='w-100'>
                  <h6 className='text-muted'>Description</h6>
                  <textarea
                    style={{ height: '150px' }}
                    placeholder='Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions, Get to know Legally and Cos services and ask your questions I'
                    className='border border-1 rounded-3 p-2 w-100 h-70'
                  />
                </div>
              </Col>
              <Col xl={6} xs={12}>
                <div className='w-100'>
                  <h6 className='text-muted '>
                    Keywords{' '}
                    <small className='ms-3 ' style={{ fontSize: '10px' }}>
                      {' '}
                      (Words or categories related to this item)
                    </small>
                  </h6>
                  <div className='border  border-1 w-100 h-100 p-2 rounded-3 '>
                    <div className='mt-2'>
                      <input
                        placeholder='Restaurante |'
                        value={keywordInput}
                        onChange={e => setKeywordInput(e.target.value)}
                        onKeyPress={e => {
                          if (e.key === 'Enter') {
                            addKeyword();
                          }
                        }}
                        className=' p-1 w-100'
                      />
                    </div>
                    <div
                      className='d-flex flex-wrap'
                      style={{ height: 'auto',width:'100%' }}
                    >
                      {keywords.map((keyword, index) => (
                        <div
                          key={index}
                          className='badge rounded-5 bg-warning p-2 me-2 text-center mt-2'
                          style={{
                            backgroundColor: 'rgba(254, 240, 203, 0.7)',
                            color: '#A77C0E',
                            cursor: 'pointer', 
                            width:'auto',
                            height:'28px',
                          }}
                          onClick={() => removeKeyword(index)}
                        >
                          {keyword}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <h6 className='text-muted '>Ad Thumbmail</h6>
              <Col xl={12} xs={12}>
                <div
                  className='d-flex flex-column justify-content-center align-items-center w-100 p-4'
                  style={{
                    border: '2px dotted rgba(205, 148, 3, 0.5)', height:'300px',
                  }}
                >
                  <Col xs='auto'>
                    {/* <img src='./BannerFilesIcon.svg' alt='files icon' /> */}
                    <img
                      src='./BannerFilesIcon.svg'
                      alt='files icon'
                      onClick={handleIconClick}
                      style={{ cursor: 'pointer',marginTop:'50px',width:'150%' }}
                    />
                    <input
                      type='file'
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileSelected}
                    />
                  </Col>
                  <Col>
                    <p className='text-muted text-center fs-6 mt-2'>
                      <span style={{ fontSize: '12px' }}>
                        (Words or categories related to this item)
                      </span>
                    </p>
                  </Col>
                </div>
              </Col>
            </Row>
            <Row className='mt-4 mb-4'>
              <Col lg={8}></Col>
              <Col
                lg={4}
                className='d-flex justify-content-center align-items-center'
              >
                <Col>
                  <button
                    type='button'
                    className='w-100 rounded-3 p-2 border-0'
                    style={{
                      backgroundColor: 'rgba(134, 142, 150, 0.2)',
                      color: '#868E96',
                    }}
                  >
                    Cancel
                  </button>
                </Col>
                <Col>
                  <button
                    type='button'
                    variant='secondary'
                    onClick={handleNextModalShow}
                    className='ms-2 w-100 rounded-3 p-2 border-0 text-white '
                    style={{ backgroundColor: '#596068' }}
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateBanner;
