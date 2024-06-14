// src/selectors.js
import { createSelector } from 'reselect';

const getItems = (state) => state.items;
const getFilter = (state) => state.filter;

export const getFilteredItems = createSelector(
  [getItems, getFilter],
  (items, filter) => items.filter(item => item.type === filter)
);
