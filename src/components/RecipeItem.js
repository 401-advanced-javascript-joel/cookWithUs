import React from 'react';
import { ListItem, Text } from 'native-base';

function RecipeItem(props) {
  const { food } = props;

  return (
    <ListItem>
      <Text>{food}</Text>
    </ListItem>
  );
}

export default RecipeItem;
