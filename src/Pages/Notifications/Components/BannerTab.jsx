import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotificationTabBar = (props) => {
  console.log(props.activeBtn)
  const [activeTab, setActiveTab] = useState(props.activeBtn); // Default to 'newMessage' tab

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Container className=''>
        <Row className='mt-4 border-bottom pb-3'>
          <Col md={8} sm={12}>
            <h3 className='text-muted'>Notification</h3>
          </Col>
          <Col md={2} xs={12}>
            <Link className='text-muted' to='/CreateNewMessage'>
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
                New message
              </h3>
            </Link>
          </Col>
          <Col md={2} xs={12}>
            {' '}
            <Link className='text-muted' to='/Advices'>
              {' '}
              <h3
                className={`d-flex align-items-center justify-content-center fs-6 rounded-2 ${
                  activeTab === 'newAdvice' ? 'active-tab' : ''
                }`}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor:
                    activeTab === 'newAdvice' ? '#CD9403' : '#868E9633',
                  color: activeTab === 'newAdvice' ? 'white' : '#75818D',
                  cursor: 'pointer',
                }}
                onClick={() => handleTabClick('newAdvice')}
              >
                {' '}
                New advice
              </h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotificationTabBar;
