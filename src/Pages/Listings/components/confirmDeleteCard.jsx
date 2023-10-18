import React, { useState } from 'react';
export const confirmDeleteCard = () => {
  const [isSectionOpen, setSectionOpen] = useState(true);

  const handleCloseSection = () => {
    setSectionOpen(false);
  };
  return (
    <>
      {isSectionOpen && (
        <div className='bg-white h-100 w-75 rounded-3'>
          <div className='text-end p-3'>
            <img
              src='/public/X sign.svg'
              alt='exit'
              style={{ cursor: 'pointer' }}
              onClick={handleCloseSection}
            />
          </div>
          <div className='text-center'>
            <img src='/public/checkicon.svg' alt='Checkicon' className='mt-3' />
            <h2 className='mt-3 w-100 text-black fw-bold fs-5'>It's gone!</h2>
            <p className='mt-3 pb-5 w-100 text-black'>
              The items have been
              <br /> successfully deleted!
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default confirmDeleteCard;
