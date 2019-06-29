import { combineReducers } from 'redux';
import accordionReducer from './accordion_reducer';
import changingButtonReducer from './changing_button_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
    accordion: accordionReducer,
    changingButton: changingButtonReducer,
    modal: modalReducer
});

export default rootReducer;
