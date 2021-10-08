import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './InputsForm.module.css';
import { v4 as uuidv4 } from 'uuid';

class InputsForm extends Component {
    state = {
    subscriber: '',
    number: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
      id: uuidv4()
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.contactToUp(this.state);
    this.reset();
  };

  reset = () => this.setState({ subscriber: '', number: '' });

  render() {
    const {subscriber, number} = this.state
    const { handleSubmit, handleInputChange } = this;
    return (
      <div className={s.frame}>
        <form onSubmit={handleSubmit} className={s.form}>
            <h3>Name</h3>
            <label >
              <input
                className={s.input}
                type="text"
                name="subscriber"
                value={subscriber}
                onChange={handleInputChange}  
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </label>
            
            <h3>Number</h3>

            <label>
                <input
                className={s.input}
                type="tel"
                name="number"
                value={number}
                onChange={handleInputChange} 
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
            </label> 
          <button type="submit" className={s.btn}>Add contact</button> 
        </form> 
      </div>
    )
  };
};

InputsForm.propTypes = {
  subscriber: PropTypes.string,
  number: PropTypes.string,
};

export default InputsForm;