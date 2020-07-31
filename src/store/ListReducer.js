const initState = {
  allFood: [],
  searchTerm: '',
};

const reducer = (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'UPDATE_LIST':
      newState.allFood = action.payload;
      break;
    case 'UPDATE_FORM':
      newState.searchTerm = action.payload;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
