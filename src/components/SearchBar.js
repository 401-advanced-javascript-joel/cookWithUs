import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  Icon,
  Text,
} from 'native-base';
export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item rounded>
            <Input placeholder='Rounded Textbox' />
          </Item>
        </Content>
        <Button iconRight light>
          <Text>Next</Text>
          <Icon name='arrow-forward' />
        </Button>
      </Container>
    );
  }
}
