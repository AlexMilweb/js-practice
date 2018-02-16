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

    render() {
        const { id, noteText, color } = this.props;

        return (
            <li
                className='note'
                key={id}
                style={{ backgroundColor: color }}
            >
                {noteText}
            </li>
        );
    }
}
