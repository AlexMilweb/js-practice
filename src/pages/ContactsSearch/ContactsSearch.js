import React, { PureComponent } from 'react';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './ContactsSearch.css';

export default class ContactsSearch extends PureComponent {
    state = {
        allContacts: [],
        displayedContacts: [],
        searchValue: '',
        isChange: false
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => { 
                this.setState({
                    allContacts: json
                });
            });
    }

    renderContact = contact => {
        const { username, phone, id, company } = contact;

        return (
            <li key={id} className='ContactsSearch__contact'>
                <h3><small>Username:</small> {username}</h3>
                <h4><small>Phone:</small> {phone}</h4>
                <h4><small>Company:</small> {company.name}</h4>
            </li>
        );
    }

    handleSearch = e => {
        const searchQuery = e.target.value.toLowerCase();
        const displayedContacts = this.state.allContacts.filter(contact => {
            const searchValue = contact.username.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts,
            isChange: true,
            searchValue: searchQuery
        });
    }

    renderNotice = text => {
        return (
            <li>
                <h3 className='ContactsSearch__title'>
                    <small>{text}</small>
                </h3>
            </li>
        );
    }

    render() {
        const { displayedContacts, isChange, searchValue } = this.state;

        return (
            <Grid>
                <Row>
                    <Col className='col-md-4'>
                        <Form>
                            <FormGroup>
                                <ControlLabel htmlFor='search'>
                                    Поиск контакта по имени
                                </ControlLabel>
                                <FormControl id='search' onChange={this.handleSearch} />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col className='col-md-8'>
                        <ul className='ContactsSearch__list'>
                            {searchValue !== '' && displayedContacts.map(this.renderContact)}
                            {!isChange && this.renderNotice('Введите в поле слева имя контакта')}
                            {searchValue === '' && isChange && this.renderNotice('Поиск не дал результатов. Попробуйте еще раз')}
                        </ul>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
