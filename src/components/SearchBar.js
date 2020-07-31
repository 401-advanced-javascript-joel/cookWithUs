import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, Item, Input, Button, Text } from 'native-base';
export default class SearchBar extends Component {
  render() {
    return (
      <>
        <Item rounded>
          <Input placeholder='chicken...' />
          <Button iconRight light>
            <Text>Search</Text>
          </Button>
        </Item>
        <Grid>
          <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
          <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
        </Grid>
      </>
    );
  }
}
