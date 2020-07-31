const initState = {
  allFood: [],
};

const reducer = (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'UPDATE_LIST':
      newState.allFood = action.payload;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
