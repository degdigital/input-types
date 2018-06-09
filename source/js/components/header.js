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
            <header className="header">
                <div className="wrapper">
                    <h1 className="logo">Input Type Sandbox</h1>
                    <div className="header__buttons">
                        <button className="button" onClick={this.submitAllForms}>Test All Inputs</button>
                        <button className="button" onClick={this.props.onAddInput}>Add an Input</button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;