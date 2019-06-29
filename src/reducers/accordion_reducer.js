import types from '../actions/types';

const DEFAULT_STATE = {
    items: {}
};

function accordionReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.REGISTER_ACCORDION_ITEM:
            return {
                items: {
                    ...state.items,
                    [action.id]: false
                }
            }
        case types.TOGGLE_ACCORDION_ITEM:
            return {
                items: {
                    ...state.items,
                    [action.id]: !state.items[action.id]
                }
            }
        default:
            return state;
    }
}

export default accordionReducer;
