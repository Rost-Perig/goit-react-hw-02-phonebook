import React, { Component } from 'react';
import './App.css';
import Section from './componets/Section';
import InputsForm from './componets/InputsForm';
import ContactList from './componets/ContactList';

class App extends Component {
  state = {
    contacts: []
  };

  contactEraser = data => {
    // console.log(data);
    this.setState((prevState) => {
      // console.log(prevState.contacts.id);
      // console.log(prevState.contacts.findIndex(item => item.id === data));
      prevState.contacts.splice(prevState.contacts.findIndex(item => item.id === data), 1);
      return ({
        contacts: [...prevState.contacts]
      })
     })
    
  }


  appStateChanger = data => {
    if (this.state.contacts.findIndex(item => item.subscriber === data.subscriber) !== -1) {
      return alert(`Абонент с именем ${data.subscriber} уже существует!`);
    };

    if (this.state.contacts.findIndex(item => item.number === data.number) !== -1) {
      return alert(`Такой номер ${data.number} уже присвоен другому абоненту!`);
    };

    this.setState((prevState) => {
      return (
        {
          contacts: [...prevState.contacts, data]
        }
      )
    }) 
  };

  render() {
    return (
      <div className="App">
      <Section title={"Phonebook"}>
        <InputsForm contactToUp={this.appStateChanger}/>
      </Section>
      <Section title={"Contacts"}>
          <ContactList contactArr={this.state.contacts} idToUp={this.contactEraser}/>
      </Section>
      </div>
    )
  };
};

export default App;