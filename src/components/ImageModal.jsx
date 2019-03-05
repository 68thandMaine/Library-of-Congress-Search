import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ImageModal = ({imageData}) => {
  console.log('image modal', imageData);
  return (
    <div className='imageModal'>
      <img src={imageData.fullImage} />
      <h6>{imageData.title}</h6>
    </div>
  );
};
/*
<img src={imageData.fullImage} />
*/
ImageModal.propTypes = {
  imageData: PropTypes.object
};

const mapStateToProps = state => {
  return {
    imageData: state.selectedImage
  };
};

export default connect(mapStateToProps)(ImageModal);
