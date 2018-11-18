const INIT_STATE = {};
export const childReducer = (state, action) => {
	switch (action.type) {
		case 'REST_CHILD_DATA':
			return INIT_STATE
		default:
			return state
	}
};