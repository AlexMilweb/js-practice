import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './NoteEditor.css';

const colors = [
    '#e06d6d',
    '#3fd370',
    '#54f2ef',
    '#706eea',
    '#f6ff00',
    '#fcaf16'
];

export default class NoteEditor extends PureComponent {
    static propTypes = {
        onNoteAdd: func.isRequired
    }

    state = {
        textValue: '',
        noteColor: 'yellow'
    }

    handleChangeValue = e => {
        this.setState({
            textValue: e.target.value
        });
    }

    handleNoteAdd = () => {
        const newNote = {
            id: Date.now(),
            color: this.state.noteColor,
            noteText: this.state.textValue
        }

        this.props.onNoteAdd(newNote);
        this.setState({
            textValue: ''
        });
    }

    handleGetColor = color => () => {
        this.setState({
            noteColor: color
        });
    }

    handleActiveColor = e => {
        const activeElement = e.currentTarget.querySelector('.noteEditor__colorButton_active');

        if (activeElement !== null && e.target !== e.currentTarget) {
            activeElement.classList.remove('noteEditor__colorButton_active');
        }

        if (e.target !== e.currentTarget) {
            e.target.classList.add('noteEditor__colorButton_active');
        }
    }

    renderColorItem = color => {
        return (
            <li key={color} className='noteEditor__colorItem'>
                <button
                    style={{
                        backgroundColor: color
                    }}
                    className='noteEditor__colorButton'
                    onClick={this.handleGetColor(color)}
                ></button>
            </li>
        );
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
                            <ul onClick={this.handleActiveColor} className='noteEditor__colorsList'>
                                {colors.map(this.renderColorItem)}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </section>
        );
    }
}
