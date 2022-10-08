import { Component } from "react";
import { nanoid } from 'nanoid'
import Form from "./Components/Form";
import Contacts from "./Components/Contacts";
import Filter from "./Components/Filter";


class App extends Component {
  state = {
    contacts: [],
    filter: ''
    
  };
  
  addContact = data => {
    const contact = {
      id: nanoid() ,
      ...data
    };
  //  this.state.contacts.map(({name}) => {
  //   if(name === data.name) {
  //     alert('Enter uniq name')
  //     return
  //   }
  //  })
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  searchContact = value => {
    console.log(value);
    this.setState({filter: value})
  }
  getVisibleTContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  deleteContact = deleteId => {
    console.log(deleteId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== deleteId)
    }))
  }

  render(){
    const visibleContacts = this.getVisibleTContacts()
    return (
    <div className="App">
      <Form onSubmit={this.addContact} />
      <Contacts contacts={visibleContacts} onDelete={this.deleteContact}/>
      <Filter searchHandler={this.searchContact}/>
    </div>
  );}
}

export default App;
