import React from 'react'
// Контролируемый компонент (имеет стейты)
export default class NameForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                />
            </div>
        )
    }
}

