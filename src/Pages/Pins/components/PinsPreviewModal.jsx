import React, { useState } from 'react';
import './Modal.css';

export const PinsPreviewModal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1475257026007-0753d5429e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const changeImage = index => {
    setActiveIndex(index);
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-images'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === activeIndex ? 'active' : 'hidden'}
          />
        ))}
      </div>
      <div className='carousel-dots'>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? 'dot active-dot' : 'dot'}
            onClick={() => changeImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PinsPreviewModal;
