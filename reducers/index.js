import { combineReducers } from 'redux';

const someReducer = () => [{ title: '', name: '' }];

const selectReducer = (selected = null, action) => {
  if (action.type === 'TYPE') {
    return action.payload;
  }

  return selected;
};

export default combineReducers({
  type: someReducer,
  selectType: selectReducer,
});
