import types from '../actions/types';

const DEFAULT_STATE = {
    isOpen: false
};

function modalReducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.CLOSE_MODAL:
            return { isOpen: false };
        case types.OPEN_MODAL:
            return { isOpen: true };
        default:
            return state;
    }
}

export default modalReducer;
