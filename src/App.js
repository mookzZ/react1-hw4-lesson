import React from "react";

class Form extends React.Component {
    handlesubmitClick = () => {
        const name = this._name.value
        console.log(name)
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this._name = input} />
                <button onClick={this.handlesubmitClick}>Sign Up</button>
            </div>
        )
    }
}

export default Form
// Неуправляемые компоненты (выше)


