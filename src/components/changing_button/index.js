import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementButtonClicks, setButtonColor } from '../../actions';
import './button_styles.scss';

class ChangingButton extends Component {
    componentDidMount(){
        this.props.setButtonColor(this.props.clicks);
    }

    componentDidUpdate(prevProps){
        const { clicks, setButtonColor } = this.props;

        if(prevProps.clicks !== clicks){
            setButtonColor(clicks);
        }
    }

    render(){
        const { clicks, color, incrementButtonClicks } = this.props;

        const style = {
            backgroundColor: color
        }

        return (
            <div>
                <button style={style} className="btn" onClick={incrementButtonClicks}>I Change Colors</button> Click Count: {clicks}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        clicks: state.changingButton.clicks,
        color: state.changingButton.color
    }
}

export default connect(mapStateToProps, {
    incrementButtonClicks: incrementButtonClicks,
    setButtonColor: setButtonColor
})(ChangingButton);
