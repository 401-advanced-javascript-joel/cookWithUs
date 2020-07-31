import { List, ListItem, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/storeAction';
function RecipeList(props) {
  // const [recipes , setRecipes] = useState([]);
  const { food, get } = props;

  useEffect(() => {
    get();
  }, [get]);

  console.log('food', food);
  return (
    <List>
      <ListItem>
        <Text>Joel </Text>
      </ListItem>
      <ListItem>
        <Text>Blandine</Text>
      </ListItem>
      <ListItem>
        <Text>Henok</Text>
      </ListItem>
    </List>
  );
}
const mapToStateProps = (state) => {
  return { food: state.listFood.allFood };
};
const mapDispatchProps = (dispatch) => {
  return { get: () => dispatch(actions.getRecipe()) };
};

export default connect(mapToStateProps, mapDispatchProps)(RecipeList);
