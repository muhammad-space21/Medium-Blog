import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHome } from '../../redux/modules/home/homeActions';
import {
  MainPageStyled,
  Content,
  HR,
  ButtonContainer
} from './style';


import TopArticlesContainer from '../../components/articles-container-top-medium/top-articles-container';
import ButtonPrimary from '../../components/button-primary-medium/button-primary';
import ArticleBodyContainer from '../../components/articles-body-container-medium';
import PopularArticle from '../../components/articles-container-popular-medium/popular-articles-container';

const HomePage = ({
  home, getHome
}) => {
  useEffect(() => {
    getHome();
  }, []);
  return (
    <MainPageStyled>
      <TopArticlesContainer />
      <ButtonContainer>
        <ButtonPrimary btnLink>See Editor's picks   </ButtonPrimary>
      </ButtonContainer>
      <HR />
      <Content>
        <ArticleBodyContainer />
        <PopularArticle />
      </Content>
    </MainPageStyled>
  );
};

HomePage.defaultProps = {
  home: PropTypes.objectOf(PropTypes.any),
  getHome: PropTypes.func
};

HomePage.propTypes = {
  home: {},
  getHome: () => {}
};
const mapStateToProps = (state) => ({
  home: state.homeReducer.home

});

const mapDispatchToProps = (dispatch) => ({
  getHome: () => dispatch(getHome())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
