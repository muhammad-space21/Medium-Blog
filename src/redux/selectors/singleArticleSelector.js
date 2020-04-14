import { createSelector } from 'reselect';
import moment from 'moment';
import { labelToRoute } from '../../utils';

export const getArticle = (state) => state.singleArticleReducer.article;

const createFormattedArticle = (item) => item && ({
  id: item.id,
  route: `/articles/${item.slug}`,
  title_uz: item.title_uz,
  title_ru: item.title_ru,
  description_ru: item.description_ru,
  description_uz: item.description_uz,
  body_uz: item.body_uz,
  body_ru: item.body_ru,
  createdAt: moment(item.createdAt).format('MMM Do YYYY'),
  metaFields: item.metaFields,
  categories: item.categories.map((i) => ({
    categoryId: i.id,
    label: i.name,
    route: labelToRoute(`/category/${i.name}`)
  }))
});

export const singleArticleSelector = createSelector(
  getArticle,
  (article) => createFormattedArticle(article)
);
