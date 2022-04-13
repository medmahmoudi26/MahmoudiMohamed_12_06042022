import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ErrorModal extends Component {
    render() {
        return (
            <section className="errorModalBackground">
                <div className="errorModalContent">
                    <div className="errorModalBody">
                        <h3>Petit problème... Une erreur s'est produite.</h3>
                        <p>{this.props.message}</p>
                    </div>
                </div>
            </section>
        )
    }
}

ErrorModal.propTypes = {
    message : PropTypes.string,
}

export default ErrorModal;