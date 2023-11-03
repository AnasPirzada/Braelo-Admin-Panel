import React from 'react';
import LineGra from './lineGraph.jsx';
import { Percent } from '@mui/icons-material';
export const GraphCard = ({ title, value, Percentage }) => {
  return (
    <div
      className='d-flex justify-content-center align-items-center rounded-3 '
      style={{ width: '100%', border: '0.898px solid #A9B4BF' }}
    >
      <div className='ms-2' style={{ width: '40%' }}>
        <h4 className='text-muted' style={{ fontSize: '18px' }}>
          {title}
        </h4>
        <h6 className='text-secondary'>{value}</h6>
        <p style={{ color: '#26A51B' }}>{Percentage}</p>
      </div>
      <div className='' style={{ width: '60%' }}>
        <div className='resgraph'>
          <LineGra />
        </div>
      </div>
    </div>
  );
};
export default GraphCard;
