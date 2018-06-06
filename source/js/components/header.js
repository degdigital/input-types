import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.submitAllForms = this.submitAllForms.bind(this);
    }

    submitAllForms() {
        [...document.querySelectorAll('button[type="submit"]')].forEach(buttonEl => buttonEl.click());
    }

    render() {
        return (
            <header>
                <h1>Input Type Sandbox</h1>
                <button onClick={this.props.onAddInput}>Add an Input</button>
                <button onClick={this.submitAllForms}>Test All Forms</button>
                <br /><br />
            </header>
        );
    }
}

export default Header;