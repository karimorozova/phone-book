import { Component } from 'react';
import s from './Filter.module.css'

class Filter extends Component {
    state = {
        searchValue: ''
    }
    handleChange = (e) => {
        const {name, value} = e.currentTarget
        this.setState({[name]: value})
        this.props.searchHandler(this.state.searchValue);
    }
    render() {
        return (<label >Search
            <input type="text" name='searchValue' onChange={this.handleChange}/>
        </label>)
    }
}

export default Filter