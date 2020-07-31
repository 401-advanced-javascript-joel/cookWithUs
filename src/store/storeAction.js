import React from 'react';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';

export const getRecipe = () => async (dispatch) => {
  let results = await axios.get(
    'https://api.edamam.com/search?q=chicken&app_id=3797b004&app_key=2b3b020dd2899c6b03440d2c09a67b47'
  );

  dispatch(initRecipe(results.data.hits));
};

const initRecipe = (payload) => {
  return {
    type: 'UPDATE_LIST',
    payload,
  };
};
