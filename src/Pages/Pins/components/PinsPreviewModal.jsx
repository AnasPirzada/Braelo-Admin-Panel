import React from 'react';
import PinsModal from './pinsModal.jsx';
export const PinsPreviewModal = () => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '610px',
        height: '1417px',
        borderRadius: '12px 12px 0 0',
      }}
    >
      <PinsModal />
    </div>
  );
};
export default PinsPreviewModal;
