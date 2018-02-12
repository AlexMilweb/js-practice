import React, { PureComponent } from 'react';
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
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
                        <li>
                            <Link to='/'>
                                Main page
                            </Link>
                        </li>
                        <li>
                            <Link to='/contacts-search/'>
                                Contacts search
                            </Link>
                        </li>
                    </NavDropdown>
                </Nav>    
                <p className='navbar-text navbar-right'>Автор: Александр Милютин</p>
            </Navbar>
        );
    }
}
