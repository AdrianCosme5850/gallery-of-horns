import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
 render(){
    return(
        <Modal show={this.props.showModal} onHide={this.props.modalOff}><img src={this.props.image} alt='mew'/></Modal>
    )
}
}

export default SelectedBeast;