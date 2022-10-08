import { Component } from 'react';
import s from './Contacts.module.css'

class Contacts extends Component {
   deleteContact = (id) => {
    console.log(id);
    this.props.onDelete(id)
   }
    render() {
        const {contacts} = this.props
        return (<div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(({id, name, number}) => (<li key={id}><span>{name}</span> <span>{number}</span> 
                <span onClick={() => this.deleteContact(id)}>X</span></li>))}
                
            </ul></div>)
    }
}

export default Contacts