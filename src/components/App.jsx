import React from 'react';
import Search from './Search';
import styles from './App.css';
import Carousel from './ResultCarousel';
import SavedImages from './SavedImages';
import ImageModal from './ImageModal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as actions from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.Component {

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebasePictureCollectionRef } = actions;
    dispatch(watchFirebasePictureCollectionRef());
  }

  render() {
    return (
      <div className={styles.app}>
        <h1>Library of Congress Search</h1>
        <Search />
        <Carousel />
        <div className='imageParent'>
          <SavedImages />
          <ImageModal />
        </div>
      </div>
    );
  }

}

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(App);
