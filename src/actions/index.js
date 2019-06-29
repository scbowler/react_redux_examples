import types from './types';

// Accordion action creators
export function registerAccordionItem(accordionId){
    return {
        type: types.REGISTER_ACCORDION_ITEM,
        id: accordionId
    }
}

export function toggleAccordionItem(accordionId){
    return {
        type: types.TOGGLE_ACCORDION_ITEM,
        id: accordionId
    }
}

// Changing Button action creators
export function incrementButtonClicks(){
    return {
        type: types.INCREMENT_BUTTON_CLICKS
    }
}

export function setButtonColor(clicks){
    let color = 'hotpink';

    if (!clicks) {
        color = 'grey';
    } else if (clicks < 5) {
        color = 'blue';
    } else if (clicks < 10) {
        color = 'green';
    } else if (clicks < 15) {
        color = 'yellow';
    } else if (clicks < 20) {
        color = 'orange';
    } else if (clicks < 25) {
        color = 'red';
    }

    return {
        type: types.SET_BUTTON_COLOR,
        color: color
    }
}

// Modal action creators
export function closeModal(){
    return {
        type: types.CLOSE_MODAL
    }
}

export function openModal() {
    return {
        type: types.OPEN_MODAL
    }
}
