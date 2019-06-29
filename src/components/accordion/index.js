import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccordionItem from './accordion_item';
import { registerAccordionItem } from '../../actions';
import './accordion_style.scss'

class Accordion extends Component {
    constructor(props){
        super(props);

        this.props.content.forEach((item, index) => {
            this.props.registerAccordionItem(index);
        });
    }

    render() {
        const items = this.props.content.map((item, index) => {
            return <AccordionItem key={index} id={index} title={item.title} content={item.content}/>
        });

        return (
            <div className="accordion">
                {items}
            </div>
        );
    }
}

export default connect(null, {
    registerAccordionItem: registerAccordionItem
})(Accordion);
