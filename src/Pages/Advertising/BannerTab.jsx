import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
// import AdvTabs from './AdvTabs';
import { Link } from 'react-router-dom';

const BannerTab = props => {
  console.log(props.activeBtn);
  const [activeTab, setActiveTab] = useState(props.activeBtn);
  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };
  return (
    <>
      <Container className=''>
        <Row className='mt-4 border-bottom pb-3  '>
          <Col md={5} sm={3}>
            <h3 className='text-muted'>
              <Link className='text-muted' to='/AdvertisingPage'>
              Advertising
              </Link>
            </h3>
          </Col>
          <Col md={1} xs={4} className='text-center'>
            <Badge className='bg bg-secondary ' sm={3}>
              <img src='./fillter.svg' style={{ padding: '10px' }} />
            </Badge>
          </Col>
          <Col md={2} xs={8}>
            <Link className='text-muted' to='/createBanner'>
              <h3
                className={`d-flex align-items-center justify-content-center fs-6 rounded-2 ${
                  activeTab === 'newBanner' ? 'active-tab' : ''
                }`}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor:
                    activeTab === 'newBanner' ? '#CD9403' : '#868E9633',
                  color: activeTab === 'newBanner' ? 'white' : '#75818D',
                  cursor: 'pointer',
                }}
                onClick={() => handleTabClick('newBanner')}
              >
                New Banner
              </h3>
            </Link>
          </Col>
          <Col md={2} xs={6}>
            <Link className='text-muted' to='/createSpotlight'>
              <h3
                className={`d-flex align-items-center mt-2 mt-md-0 justify-content-center fs-6 rounded-2 ${
                  activeTab === 'newSpotlight' ? 'active-tab' : ''
                }`}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor:
                    activeTab === 'newSpotlight' ? '#CD9403' : '#868E9633',
                  color: activeTab === 'newSpotlight' ? 'white' : '#75818D',
                  cursor: 'pointer',
                }}
                onClick={() => handleTabClick('newSpotlight')}
              >
                {' '}
                New Spotlight
              </h3>
            </Link>
          </Col>
          <Col md={2} xs={6}>
            <Link className='text-muted' to='/createTextAdd'>
              <h3
                className={`d-flex align-items-center mt-2 mt-md-0  justify-content-center fs-6 rounded-2 ${
                  activeTab === 'newAdd' ? 'active-tab' : ''
                }`}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor:
                    activeTab === 'newAdd' ? '#CD9403' : '#868E9633',
                  color: activeTab === 'newAdd' ? 'white' : '#75818D',
                  cursor: 'pointer',
                }}
                onClick={() => handleTabClick('newAdd')}
              >
                {' '}
                Text Add
              </h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BannerTab;
