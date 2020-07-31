import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HeaderBar from './src/components/HeaderBar';
import SearchBar from './src/components/SearchBar';
import RecipeList from './src/components/RecipeList';
import store from './src/store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Container>
          <HeaderBar />
          <Content>
            <SearchBar />
            <RecipeList />
          </Content>
        </Container>
      </Provider>
    );
  }
}
