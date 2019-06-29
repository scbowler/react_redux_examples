import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions';
import './modal_style.scss';

function Modal(props){
    const { content = '', isOpen, closeModal, openModal } = props;

    if(isOpen){
        return (
            <div className="modal">
                <div className="modal-container">
                    <h1 className="modal-header">My Cool Modal</h1>
                    <div className="modal-content">
                        {content}
                    </div>
                    <div className="modal-actions">
                        <button onClick={closeModal} className="btn">Okay</button>
                    </div>
                </div>
            </div>
        )
    }

    return <button className="btn" onClick={openModal}>Open Modal</button>
}

function mapStateToProps(state){
    return {
        isOpen: state.modal.isOpen
    };
}

export default connect(mapStateToProps, {
    closeModal: closeModal,
    openModal: openModal
})(Modal);
