import React from 'react';
import { connect } from 'react-redux';
import { toggleAccordionItem } from '../../actions';

function AccordionItem(props){
    const { content, id, isOpen, title, toggleAccordionItem  } = props;

    return (
        <div className="accordion-item-container" onClick={() => toggleAccordionItem(id)}>
            <div className="item-title">{title}</div>
            <div className={`item-content ${isOpen ? 'open' : ''}`}>{content}</div>
        </div>
    );
}

function mapStateToProps(state, props){
    return {
        isOpen: state.accordion.items[props.id]
    }
}

export default connect(mapStateToProps, {
    toggleAccordionItem: toggleAccordionItem
})(AccordionItem);
