import React, { Component } from 'react';

export class ControlledForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    handleNameChange = (event) => {
        let newValue = event.target.value;
        this.setState({ name: newValue });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Add any additional logic for handling the form submission here
        console.log("Form submitted with name:", this.state.name);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='id-name'>Your name:</label>
                    <input
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        id='id-name'
                        type='text'
                    />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default ControlledForm;
