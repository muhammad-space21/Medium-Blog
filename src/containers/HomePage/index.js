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


import TopArticlesContainer from '../../components/ArticlesContainerTopMedium/index';
import ButtonPrimary from '../../components/ButtonPrimaryMedium/index';
import ArticleBodyContainer from '../../components/ArticlesBodyContainerMedium';
import PopularArticle from '../../components/ArticlesContainerPopularMedium/index';

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
