import React from 'react';
import {connect} from 'react-redux';
import {addInputItem} from '../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        addInputItem: () => dispatch(addInputItem())
    };
};

const submitAllForms = () => {
    [...document.querySelectorAll('button[type="submit"]')].forEach(buttonEl => buttonEl.click());
}

const Header = ({isFetching, addInputItem, onSave}) => (
    <header className="header">
        <div className="wrapper">
            <h1 className="logo">Input Type Sandbox</h1>
            <div className="header__buttons">
                <button className="button" onClick={submitAllForms}><span className="icon-test"></span> Test All</button>
                <button className="button" onClick={addInputItem} disabled={isFetching}><span className="icon-add"></span> Add Input</button>
                <button className="button" onClick={onSave} disabled={isFetching}><span className="icon-upload"></span> Save</button>
            </div>
        </div>
    </header>
);

export default connect(null, mapDispatchToProps)(Header);