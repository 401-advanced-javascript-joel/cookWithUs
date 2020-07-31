import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderBar extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>CookWithUs</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
