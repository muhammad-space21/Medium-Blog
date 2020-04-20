import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHome } from '../../redux/modules/home/homeActions';
import { homeSelector } from '../../redux/selectors/homeSelector';
import {
  MainPageStyled,
  Content,
  HR,
  LoaderWrapper
} from './style';


import TopArticlesContainer from '../../components/articles-container-top-medium/top-articles-container';
import ArticleBodyContainer from '../../components/articles-body-container-medium';
import PopularArticle from '../../components/articles-container-popular-medium/popular-articles-container';
import Spinner from '../../components/spinner';
import Loader from '../../components/Loader';

const HomePage = ({
  home, getHome, homeList, loading
}) => {
  useEffect(() => {
    if (!home) {
      getHome();
    }
  }, [home]);

  return (
    <MainPageStyled>
      {loading && (
        <>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
          <Spinner />
        </>
      )}
      {!loading && homeList && homeList.length && (
        <>
          <TopArticlesContainer main={homeList.slice(1, 2)} />
          <Content>
            {/* <ArticleBodyContainer articles={homeList.slice(1)} /> */}
            {/* <PopularArticle /> */}
          </Content>
        </>
      )}
    </MainPageStyled>
  );
};

HomePage.defaultProps = {
  home: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.bool,
  getHome: PropTypes.func,
  homeList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

HomePage.propTypes = {
  home: {},
  loading: false,
  getHome: () => {},
  homeList: []
};
const mapStateToProps = (state) => ({
  loading: state.homeReducer.loading,
  home: state.homeReducer.home,
  homeList: homeSelector(state)

});

const mapDispatchToProps = (dispatch) => ({
  getHome: () => dispatch(getHome())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
