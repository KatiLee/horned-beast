import React from "react";
import { Image, Modal } from "react-bootstrap";

class SelectedBeast extends React.Component {

    render() {
        return (
            <Modal show={this.props.handleOnShow} onHide={this.props.handleClose}>
                <Modal.Header closeButton onClick={this.props.handleClose}>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.selectedBeast.imageURL} alt={this.props.selectedBeast.desription}/>
                </Modal.Body>
                <Modal.Footer>{this.props.selectedBeast.description}</Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast;