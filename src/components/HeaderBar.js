import React, { Component } from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderBar extends Component {
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>CookWithUs</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
