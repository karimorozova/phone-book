import { Component } from "react";
import s from './Form.module.css'

class Form extends Component {
    state = {
      contacts: [],
      name: '',
      
    };
    handleChange = (e) => {
        const {name, value} = e.currentTarget
        console.log(e.currentTarget.value);
        this.setState({[name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
        
    }
    reset = () => {
        this.setState({ name: '', contacts: [] });
      };
    render() {
        const {name} = this.props
        return (
            <form >
                <label> {name}
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                />
                <button type="submit">Add contact</button>
                </label>
            </form>
        )
    }
}

export default Form