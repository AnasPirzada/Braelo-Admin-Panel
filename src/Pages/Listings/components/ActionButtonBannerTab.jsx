import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const NotificationTabBar = () => {
  const [activeTab, setActiveTab] = useState('newMessage'); // Default to 'newMessage' tab

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('Massive actions');
  const [displayData, setDisplayData] = useState('newMessage'); // Initialize with "hello" message
  const [isActivee, setIsActivee] = useState(false);
  const [selectedd, setIsSelectedd] = useState('Filter by time');
  // Define a function to handle dropdown item clicks
  const handleDropdownItemClick = data => {
    setIsSelected(data);
    setIsActive(false);

    // Update the displayed data based on the clicked item
    switch (data) {
      case 'Archive':
        setDisplayData('newMessage');
        break;
      case 'Disable':
        setDisplayData('newMessage');
        break;
      case 'Delete':
        setDisplayData('newMessage');
        break;
      default:
        setDisplayData('');
        break;
    }
  };
  return (
    <>
      <Container className=''>
        <Row className='mt-4 border-bottom pb-3'>
          <Col md={4} xs={12}>
            {/* <Link className='text-muted' to='/Listings'> */}
            <h3 className='text-muted'>Listings</h3>
            {/* </Link> */}
          </Col>
          <Col md={3} xs={12}>
            <div className='dropdown'>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className='dropdown-btn'
              >
                {selected}
                <span>
                  <img src='./dropdownicon.svg' alt='dropdown icon' />
                </span>
              </div>
              <div
                className='dropdown-content'
                style={{ display: isActive ? 'block' : 'none' }}
              >
                <div
                  onClick={() => handleDropdownItemClick('Archive')}
                  className='item'
                >
                  Archive
                </div>
                <div
                  onClick={() => handleDropdownItemClick('Disable')}
                  className='item'
                >
                  Disable
                </div>
                <div
                  onClick={() => handleDropdownItemClick('Delete')}
                  className='item'
                >
                  Delete
                </div>
              </div>
            </div>
          </Col>
          <Col md={1} xs={6} className='d-flex'>
            <Col>
              <Link className='text-muted' to='/Actionsbutton'>
                <img src='./listingCopy.svg' alt='copybutton' />{' '}
              </Link>
            </Col>
            <Col>
              <img
                src='./listingFilter.svg'
                className='ms-2'
                alt='copybutton'
              />
            </Col>
          </Col>
          <Col md={4} xs={6}>
            {/* <Link className='text-muted' to='/CreateNewMessage'> */}
            <h3
              className={`d-flex align-items-center justify-content-center fs-6 rounded-2 ${
                activeTab === 'newMessage' ? 'active-tab' : ''
              }`}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor:
                  activeTab === 'newMessage' ? '#CD9403' : '#868E9633',
                color: activeTab === 'newMessage' ? 'white' : '#75818D',
                cursor: 'pointer',
              }}
              onClick={() => handleTabClick('newMessage')}
            >
              New Listing
            </h3>
            {/* </Link> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotificationTabBar;
