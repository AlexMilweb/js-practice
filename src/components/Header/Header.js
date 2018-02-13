import React, { PureComponent } from 'react';
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const menuItems = [
    {
        link: '/contacts-search/',
        text: 'Поиск по контактам'
    }
];

export default class Header extends PureComponent {
    renderMenuItem = item => {
        return (
            <li key={item.text}>
                <Link to={item.link}>
                    {item.text}
                </Link>
            </li>
        );
    }

    render() {
        return (
            <Navbar className='navbar-inverse navbar-fixed-top'>
                <NavbarBrand>
                    <Link to='/'>
                        Практика JavaScript и React.js
                    </Link>
                </NavbarBrand>
                <Nav>
                    <NavDropdown
                        title='Страницы с примерами'
                    >
                        {menuItems.map(this.renderMenuItem)}
                    </NavDropdown>
                </Nav>    
                <p className='navbar-text navbar-right'>Автор: Александр Милютин</p>
            </Navbar>
        );
    }
}
