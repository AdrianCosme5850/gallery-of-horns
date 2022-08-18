import React from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
 render(){
    return(
        <>
        <ModalHeader closeButton>Picture</ModalHeader> 
        <Modal show={this.props.showModal} onHide={this.props.modalOff}>
            <img src={this.props.image} alt='mew'/></Modal>
        </>
    )
}
}

export default SelectedBeast;