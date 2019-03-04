import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ResultCarousel.css';

const ResultCarousel = ({resultList}) => {
    const value = (resultList ?
      (
        <Carousel autoPlay={true}>
        {resultList.map((url, index) =>
          <img  src={url} key={index}/>
        )}
      </Carousel>
    ) : null);
      console.log('carousel', value);
      return value;
};


ResultCarousel.propTypes = {
  resultList: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    resultList: state.locSearch.results
  };
};

export default connect(mapStateToProps)(ResultCarousel);
