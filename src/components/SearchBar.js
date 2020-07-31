import React from 'react';
import { connect } from 'react-redux';
import { Col, Grid } from 'react-native-easy-grid';
import { Form, Item, Input, Button, Text } from 'native-base';
import * as actions from '../store/storeAction';

function SearchBar(props) {
  const { term, updateForm, get } = props;

  const handleChange = (e) => {
    updateForm(e.nativeEvent.text);
  };

  return (
    <>
      <Form>
        <Item rounded>
          <Input onChange={handleChange} />
          <Button iconRight light onPress={() => get(term)}>
            <Text>Search</Text>
          </Button>
        </Item>
      </Form>
      <Grid>
        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
      </Grid>
    </>
  );
}

const mapToStateProps = (state) => {
  return { term: state.listFood.searchTerm };
};
const mapDispatchProps = (dispatch) => {
  return {
    get: (data) => dispatch(actions.getRecipe(data)),
    updateForm: (data) => dispatch(actions.updateForm(data)),
  };
};

export default connect(mapToStateProps, mapDispatchProps)(SearchBar);
