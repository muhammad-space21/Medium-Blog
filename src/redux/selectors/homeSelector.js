import { createSelector } from 'reselect';
import moment from 'moment';
import { labelToRoute } from '../../utils';

export const homeList = (state) => state.homeReducer.home;

export const recommendedArticlesList = (state) => state.articlesReducer.recommendedArticles;


const createFormattedArticle = (item, categoryArr) => ({
  id: item.id,
  route: `/articles/${item.slug}`,
  title_uz: item.title_uz,
  title_ru: item.title_ru,
  description_ru: item.description_ru,
  description_uz: item.description_uz,
  createdAt: moment(item.createdAt).format('MMM Do YYYY'),
  metaFields: item.metaFields,
  categories: categoryArr
});

export const createFormattedSection = (list) => ({
  id: list.id,
  label: list.name,
  route: labelToRoute(`/category/${list.name}`),
  articles: list.article.map((item) => createFormattedArticle(item, [{
    id: list.id,
    label: list.name,
    route: labelToRoute(`/category/${list.name}`)
  }]))
});

export const homeSelector = createSelector(
  homeList,
  (list) => list && list.map(createFormattedSection)
);
