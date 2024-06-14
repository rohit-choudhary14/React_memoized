// src/store.js
import { createStore } from 'redux';

const initialState = {
  items: [
    { id: 1, type: 'fruit', name: 'Apple' },
    { id: 2, type: 'vegetable', name: 'Carrot' },
    { id: 3, type: 'fruit', name: 'Banana' }
  ],
  filter: 'fruit'
};

function rootReducer(state = initialState, action) {
  return state;
}

const store = createStore(rootReducer);

export default store;
