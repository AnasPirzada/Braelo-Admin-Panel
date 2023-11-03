import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GraphCard from '../components/GraphCard.jsx';
import ColoumnGraph from '../components/ColoumnGraph.jsx';
import LineCha from '../components/LineChart.jsx';
import SusbscriStat from '../components/SusbscriptionState.jsx';
export const Generaldata = () => {
  return (
    <div className='w-100 pb-5'>
      <Row className='mt-3'>
        <h2 className='text-black fw-bold fs-1'>$120,420.50</h2>
        <p className='text-secondary'>
          Total assessed all period{' '}
          <span
            className='ms-2'
            style={{
              color: '#A9B4BF',
            }}
          >
            USD
          </span>
        </p>
      </Row>
      <Row className='mt-3'>
        <Col xs={12} md={3}>
          <GraphCard title='New User' value='200' Percentage={'+10%'} />
        </Col>
        <Col xs={12} md={3}>
          <GraphCard title='New Listings' value='200' Percentage={'+70%'} />
        </Col>
        <Col xs={12} md={3}>
          <GraphCard title='New Ads' value='200' Percentage={'+40% '} />
        </Col>
        <Col xs={12} md={3}>
          <GraphCard title='New Spotlights' value='200' Percentage={'+30%'} />
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col xs={12}>
          <ColoumnGraph />
        </Col>
      </Row>

      <Row className='mt-3 d-flex mb-5'>
        <Col></Col>
        <Col xs={12} xl={12} className='d-flex'>
          <LineCha />
          <SusbscriStat />
        </Col>
        <Col xl={4}></Col>
      </Row>
    </div>
  );
};
export default Generaldata;
