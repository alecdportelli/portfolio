// ImageRow.js
import React from 'react';
import PropTypes from 'prop-types';
import './imageRow.css';

const ImageRow = ({ images }) => {
  return (
    <div className="image-row">
      {images.map((item, index) => (
        <div key={index} className={`image-container ${index === 1 ? 'second-image' : ''}`}>
          <img src={item.src} alt={`Image ${index + 1}`} />
          <div className="project-name">{item.title}</div>
          <div className="project-desc">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

ImageRow.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ImageRow;