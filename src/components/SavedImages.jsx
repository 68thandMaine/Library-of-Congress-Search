import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SavedImages = ({images}) => {
  console.log('props', Object.keys(images));
  return (
    <div className='savedImageContainer'>
      {Object.keys(images).map((id) =>
        <div className='imageContainer' key={id}>
          <img src={images[id].url} />
        </div>
      )}
    </div>
  );
};

SavedImages.propTypes = {
  images: PropTypes.object
};

const mapStateToProps = state => {
  return {
    images: state.saveImage
  };
};

export default connect(mapStateToProps)(SavedImages);
