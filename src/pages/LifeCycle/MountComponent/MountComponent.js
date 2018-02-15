import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './MountComponent.css';


export default class MountComponent extends Component {
    state = {
        updateState: 0
    }

    printOnPage = methodName => {
        var ul = document.getElementById('screen');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(methodName));
        li.className = `screenItem screenItem_${methodName}`;
        ul.appendChild(li);
        ul.scrollTop = ul.scrollHeight;
    }

    componentWillMount() {
        this.printOnPage('componentWillMount');
    }

    componentDidMount() {
        this.printOnPage('componentDidMount');
    }

    componentWillReceiveProps() {
        this.printOnPage('componentWillReceiveProps');
    }

    componentWillUpdate() {
        this.printOnPage('componentWillUpdate');
    }

    componentDidUpdate() {
        this.printOnPage('componentDidUpdate');
    }

    shouldComponentUpdate() {
        this.printOnPage('shouldComponentUpdate');

        return true;
    }

    componentWillUnmount() {
        this.printOnPage('componentWillUnmount');
    }

    handleUpdateState = () => {
        this.setState(prevState => {
            return {
                updateState: prevState.updateState + 1
            }
        });

        this.printOnPage('setState');
    }

    render() {
        this.printOnPage('render');

        return (
            <div className='mountComponent'>
                <h3 className='mountComponent__title'>
                    Mounted component
                </h3>
                <div className='mountComponent__wrapper'>
                    <h4>Props: {this.props.updateProps}</h4>
                    <h4 className='mountComponent__text'>State updates: {this.state.updateState}</h4>

                    <Button onClick={this.handleUpdateState}>
                        Update state
                    </Button>
                </div>
            </div>
        );
    }
}
