import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css'
import ContactData from '../ContactData';
import FindForm from '../FindForm';


class ContactList extends Component {
    state = {
        findData: ""
    };

    tempContactArr = [];

    getContactList = () => {
        this.tempContactArr = [...this.props.contactArr].sort((a, b) => a.subscriber.localeCompare(b.subscriber));
    };

    getFindData = (data) => {
        this.setState({ findData: data })
    };
    
    render() {
           this.getContactList(); 
        return (
            <div>

                <FindForm transDataToUp={this.getFindData }/>
                
               <ul className={s.list}>
                {[...this.tempContactArr].filter(item => item.subscriber.toLowerCase().includes(this.state.findData.toLowerCase())).map(item => {
                    const { id } = item;
                    return (
                        <li key={id} className={s.listItem}>
                            < ContactData contactObj={item} idToUp={this.props.idToUp} />
                        </li>
                    );
                })}
                </ul>
                
            </div>   
        );
    };  
};

ContactList.propTypes = {
  id: PropTypes.string,
};

export default ContactList;