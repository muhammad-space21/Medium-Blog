import { createSelector } from 'reselect';
import moment from 'moment';
import { labelToRoute } from '../../utils';

export const articlesList = (state) => state.articlesReducer.articles;

export const recommendedArticlesList = (state) => state.articlesReducer.recommendedArticles;

const createFormattedArticle = (item) => ({
  id: item.id,
  route: `/articles/${item.slug}`,
  title_uz: item.title_uz,
  title_ru: item.title_ru,
  description_ru: item.description_ru,
  description_uz: item.description_uz,
  createdAt: moment(item.createdAt).format('MMM Do YYYY'),
  metaFields: item.metaFields,
  categories: item.categories.map((i) => ({
    label: i.name,
    route: labelToRoute(`/category/${i.name}`)
  }))
});

export const articlesSelector = createSelector(
  articlesList,
  (list) => list.map(createFormattedArticle)
);


export const recommendedArticlesSelector = createSelector(
  recommendedArticlesList,
  (list) => list.map(createFormattedArticle)
);
