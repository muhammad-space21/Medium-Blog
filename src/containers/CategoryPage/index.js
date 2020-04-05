import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCategory } from '../../redux/modules/category/categoryAction';

import TopicPageHeader from '../../components/topic-page-header/topic-page-header';
import NavOfArticles from '../../components/nav-of-articles';
import HomepageBody from '../../components/homepage-body/homepage-body';
import PopularTopicsSection from '../../components/popular-topics-section/popular-topics-section';

const TopicPage = ({
  getCategory
}) => (
  <>
    <TopicPageHeader />
    <NavOfArticles />
    <HomepageBody />
    <PopularTopicsSection />
  </>

);


const mapStateToProps = (state) => ({
  list: state.categoryReducer
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: () => dispatch(getCategory())
});

export default withRouter(connect(mapDispatchToProps, mapDispatchToProps)(TopicPage));
