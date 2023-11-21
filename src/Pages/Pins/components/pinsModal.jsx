import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './PinsPreviewModal.css';
const images = [
  'https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1475257026007-0753d5429e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
export const pinsModal = () => {
  return (
    <div>
      <Carousel
        controls={false}
        indicators={true}
        fade={false}
        interval={null}
        className='custom-carousel'
      >
        {images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img
              style={{ borderRadius: ' 12px 12px 0 0 ', height: '387px' }}
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className='d-block w-100'
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default pinsModal;
