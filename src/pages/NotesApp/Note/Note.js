import React, { PureComponent } from 'react';
import { string, number } from 'prop-types';
import './Note.css';

export default class Note extends PureComponent {
    static propTypes = {
        id: number.isRequired,
        noteText: string.isRequired,
        color: string
    }

    static defaultProps = {
        color: '#3bd63b'
    }

    handleNoteDelete = () => {
        const id = this.props.id;
        this.props.onDelete(id);
    }

    render() {
        const { id, noteText, color } = this.props;

        return (
            <li
                className='note'
                key={id}
                style={{ backgroundColor: color }}
            >
                <button onClick={this.handleNoteDelete} className='note__delete'>x</button>
                {noteText}
            </li>
        );
    }
}
