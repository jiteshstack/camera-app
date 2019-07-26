import { combineReducers } from "redux";

const initialState = {
	frontImage: null,
	backImage: null,
	name: null,
	amount: null,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SAVE_FRONT_IMAGE_SUCCESS':
      return Object.assign({}, state, { frontImage: action.payload });
    case 'SAVE_BACK_IMAGE_SUCCESS':
      return Object.assign({}, state, { backImage: action.payload });
    case 'CLEAR_FRONT_IMAGE':
      return Object.assign({}, state, { frontImage: null });
    case 'CLEAR_BACK_IMAGE':
      return Object.assign({}, state, { backImage: null });
    case 'SAVE_NAME':
      return Object.assign({}, state, { name: action.payload });
		default:
			return state;
	}
}

const reducers = {
  rootReducer
}

export default combineReducers(reducers);
