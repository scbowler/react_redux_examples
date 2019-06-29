import types from '../actions/types';

const DEFAULT_STATE = {
    clicks: 0,
    color: 'chartreuse'
};

function changingButtonReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.INCREMENT_BUTTON_CLICKS:
            return {
                ...state,
                clicks: state.clicks + 1
            }
        case types.SET_BUTTON_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state;
    }
}

export default changingButtonReducer;
