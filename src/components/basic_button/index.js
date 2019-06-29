import React from 'react';
import './button_styles.scss';

export default props => {
    const { backgroundColor = 'blue', className = '', click, color = 'white', text = 'Click Me' } = props;

    const style = { backgroundColor, color };

    return (
        <button className={`btn ${className}`} onClick={click} style={style}>{text}</button>
    );
}
