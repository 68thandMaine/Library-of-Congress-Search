import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ResultCarousel = ({resultList}) => {
  return(
    (resultList ?
      (<Carousel>
        {resultList.map((url, index) =>
            <div key={index}>
              <img src={url} />
              <p className='legend'>Legend 1</p>
            </div>
        )}
      </Carousel>) : null)
  );
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
