import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import v4 from 'uuid/v4';
import { saveImage } from '../actions';
import './ResultCarousel.css';

const ResultCarousel = ({dispatch, resultList}) => {
    const value = (resultList ?
      (
        <Carousel autoPlay={true}>
        {resultList.map((url, index) =>
          <div key={index} onClick={e => {
              e.preventDefault();
              console.log('image click');
              dispatch(saveImage(url, v4()));
            }}>
            <img src={url} />
          </div>
        )}
      </Carousel>
    ) : null);
      console.log('carousel', value);
      return value;
};


ResultCarousel.propTypes = {
  resultList: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    resultList: state.locSearch.results,
  };
};

export default connect(mapStateToProps)(ResultCarousel);
