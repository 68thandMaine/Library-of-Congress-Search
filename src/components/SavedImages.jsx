import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectImage } from '../actions';

const SavedImages = ({dispatch, images}) => {
  console.log('props', Object.keys(images));
  return (
    <div className='savedImageContainer'>
      {Object.keys(images).map((id) =>
        <div className='imageContainer' key={id} onClick={()=>dispatch(selectImage(images[id].title, images[id].fullImage))}>
          <img src={images[id].thumb} />
        </div>
      )}
    </div>
  );
};

SavedImages.propTypes = {
  images: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    images: state.saveImage
  };
};

export default connect(mapStateToProps)(SavedImages);
