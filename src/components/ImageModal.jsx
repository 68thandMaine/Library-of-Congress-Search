import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hideModal } from '../actions';

const ImageModal = ({dispatch, imageData}) => {
  console.log('image modal', imageData);
  return (
    (imageData.shown ?
    <div className='imageModal' onClick={() => dispatch(hideModal())}>
      <img src={imageData.fullImage} />
      <h6>{imageData.title}</h6>
    </div> : null)
  );
};

ImageModal.propTypes = {
  dispatch: PropTypes.func,
  imageData: PropTypes.object
};

const mapStateToProps = state => {
  return {
    imageData: state.selectedImage
  };
};

export default connect(mapStateToProps)(ImageModal);
