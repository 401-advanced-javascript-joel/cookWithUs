import React from 'react';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';

export const getRecipe = (searchTerm) => async (dispatch) => {
  let term = searchTerm || 'chicken';
  let results = await axios.get(
    `https://api.edamam.com/search?q=${term}&app_id=3797b004&app_key=2b3b020dd2899c6b03440d2c09a67b47`,
  );

  dispatch(initRecipe(results.data.hits));
};

const initRecipe = (foodList) => {
  return {
    type: 'UPDATE_LIST',
    payload: foodList,
  };
};

export const updateForm = (searchTerm) => {
  return {
    type: 'UPDATE_FORM',
    payload: searchTerm,
  };
};
