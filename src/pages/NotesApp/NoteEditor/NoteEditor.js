import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import './NoteEditor.css';

export default class NoteEditor extends PureComponent {
    static propTypes = {
        onNoteAdd: func.isRequired
    }

    state = {
        textValue: ''
    }

    handleChangeValue = e => {
        this.setState({
            textValue: e.target.value
        });
    }

    handleNoteAdd = () => {
        const newNote = {
            id: Date.now(),
            color: 'yellow',
            noteText: this.state.textValue
        }

        this.props.onNoteAdd(newNote);
    }

    render() {
        return (
            <section className='noteEditor'>
                <Row>
                    <Col className='col-md-8'>
                        <textarea
                            className='noteEditor__textarea'
                            placeholder='Введите в поле текст заметки...'
                            row={5}
                            value={this.state.textValue}
                            onChange={this.handleChangeValue}
                        />
                    </Col>
                    <Col className='col-md-4'>
                        <div className='noteEditor__actions'>
                            <Button onClick={this.handleNoteAdd}>
                                Добавить заметку
                            </Button>
                        </div>
                    </Col>
                </Row>
            </section>
        );
    }
}
