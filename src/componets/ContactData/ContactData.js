import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactData.module.css';

class ContactData extends Component {
    render() {
        const {subscriber, id, number} = this.props.contactObj;
        return (
            <>
                <p className={s.textItem}>
                    <span>{subscriber}:</span>
                    <span>{number}</span>
                </p>
                <button
                    className={s.btn}
                    type={"button"}
                    data-key={id}
                    onClick={e => this.props.idToUp(e.target.dataset.key)}
                >
                    Delete
                </button>
            </>
        ); 
    };
    
};

ContactData.propTypes = {
  subscriber: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactData;