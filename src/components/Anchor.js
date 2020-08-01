import React from 'react';
import { Text } from 'react-native';
import * as Linking from 'expo-linking';

export default function Anchor(props) {
  handlePress = () => {
    Linking.openURL(props.href);
    props.onPress && props.onPress();
  };

  return <Text onPress={handlePress}>{props.children}</Text>;
}
