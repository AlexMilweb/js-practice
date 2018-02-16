import React, { PureComponent } from 'react';
import Note from '../Note/Note';

export default class NotesGrid extends PureComponent {
    render() {
        return (
            <div>
                Notes Grid
                <Note />
            </div>
        );
    }
}
