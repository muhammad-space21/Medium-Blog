import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getArticles } from '../../redux/modules/articles/articlesAction';
import { getNav } from '../../redux/modules/navbar/navAction';
import { navbarSelector } from '../../redux/selectors/navbarSelector';
import { articlesSelector } from '../../redux/selectors/articlesSelector';

import { useCategories } from './hooks/use-categories';

import TopicPageHeader from '../../components/topic-page-header';
import NavOfArticles from '../../components/nav-of-articles';
import HomepageBody from '../../components/homepage-body/homepage-body';
import PopularTopicsSection from '../../components/popular-topics-section/popular-topics-section';
import Spinner from '../../components/spinner';
import Loader from '../../components/Loader';

import { LoaderWrapper, LoadMore } from './style';

const TopicPage = ({
  getCategories,
  getArticles,
  articles,
  categories,
  history,
  loading,
  maxCount
}) => {
  const {
    activePage,
    handleAddPage,
    handleChangeFilter,
    query
  } = useCategories(history, categories, articles, getArticles, getCategories);
  return (
    <>
      {activePage && (
        <TopicPageHeader
          page={activePage}
        />
      )}
      <NavOfArticles
        query={query}
        handleChangeFilter={handleChangeFilter}
      />
      {articles.length
        && (
          <HomepageBody
            articles={articles}
          />
        )}
      {loading && (
        <>
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
          <Spinner />
        </>
      )}
      {(!loading && !(maxCount <= articles.length)) && <LoadMore onClick={() => handleAddPage()}>Load More Articles</LoadMore>}
      <PopularTopicsSection />
    </>

  );
};

TopicPage.propTypes = {
  getCategories: PropTypes.func,
  getArticles: PropTypes.func,
  articles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  categories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  history: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.bool,
  maxCount: PropTypes.number
};

TopicPage.defaultProps = {
  getCategories: () => {},
  getArticles: () => {},
  articles: [],
  loading: false,
  categories: [],
  history: {},
  maxCount: 0
};


const mapStateToProps = (state) => ({
  articles: articlesSelector(state),
  loading: state.articlesReducer.loading,
  maxCount: state.articlesReducer.totalItems,
  categories: navbarSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: (query) => dispatch(getArticles(query)),
  getCategories: () => dispatch(getNav())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicPage));
