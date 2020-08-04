import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo ..."
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <input type="submit" value="submit" className="btn" style={{flex: '1'}} />
            </form>
        )
    }
}

// Prop types
AddTodo.propTypes = {
    addTodo: PropTypes.object.isRequired
};

export default AddTodo;