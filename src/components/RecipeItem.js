import React from 'react';
import { ListItem } from 'native-base';
import Anchor from './Anchor';

function RecipeItem(props) {
  const { food, url } = props;

  return (
    <ListItem>
      <Anchor href={url}>{food}</Anchor>
    </ListItem>
  );
}

export default RecipeItem;
