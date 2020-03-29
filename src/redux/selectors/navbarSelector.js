import { createSelector } from 'reselect';

export const navbarList = (state) => state.navbar.list;

const createFormattedNavbar = (item) => ({
  route: `categories/${item.name}`
});

export const threadIndicatorSelector = createSelector(
  navbarList,
  (list) => list.map(createFormattedNavbar)
);
