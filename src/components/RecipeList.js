import { List, ListItem, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/storeAction';
function RecipeList(props) {
  const { get, food } = props;

  // const [recipes , setRecipes] = useState([]);

  useEffect(() => {
    get();
  }, [get]);

  let listItems = null;
  console.log('foooooood', food[0]);
  for (let i = 0; i < food.length; i++) {
    listItems += <ListItem key={i}>{food[i].digest}</ListItem>;
  }

  return (
    <List>
      <Text>{listItems}</Text>
    </List>
  );
}
const mapToStateProps = (state) => {
  return { food: state.listFood.allFood };
};
const mapDispatchProps = (dispatch) => {
  return { get: (data) => dispatch(actions.getRecipe(data)) };
};

export default connect(mapToStateProps, mapDispatchProps)(RecipeList);
