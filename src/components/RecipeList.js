import { List } from 'native-base';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/storeAction';
import RecipeItem from './RecipeItem';

function RecipeList(props) {
  const { get, food } = props;

  useEffect(() => {
    get();
  }, [get]);

  let listItems = [];
  if (food.length !== 0) {
    for (let i = 0; i < food.length; i++) {
      listItems.push(<RecipeItem key={i} food={food[i].recipe.label} />);
    }
  } else {
    listItems.push(<RecipeItem key={'empty'} food={'No Results Found.'} />);
  }

  return <List>{listItems}</List>;
}
const mapToStateProps = (state) => {
  return { food: state.listFood.allFood };
};
const mapDispatchProps = (dispatch) => {
  return { get: (data) => dispatch(actions.getRecipe(data)) };
};

export default connect(mapToStateProps, mapDispatchProps)(RecipeList);
