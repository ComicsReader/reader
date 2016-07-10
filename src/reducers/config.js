import * as t from 'constants/ActionTypes';

const initialState = {
	collections: {}
};

export default function config(state = initialState , action) {
	switch(action.type) {
	case t.FETCH_ALL_COLLECTION:
		return {
			...state,
			collections: action.collections
		};
	default:
		return state;
	}
}
