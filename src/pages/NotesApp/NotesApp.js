import React, { PureComponent } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NoteEditor from './NoteEditor/NoteEditor';
import NotesGrid from './NotesGrid/NotesGrid';

const notes = [
    {
        id: 1,
        noteText: 'Текст заметки 1',
        color: '#3bd63b'
    },
    {
        id: 2,
        noteText: 'Текст заметки 2',
        color: '#f1f424'
    },
    {
        id: 3,
        noteText: 'Текст заметки 3',
        color: '#6c6af2'
    }
];

export default class NotesApp extends PureComponent {
    state = {
        notes: notes
    }

    handleNoteAdd = newNote => {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);

        this.setState({
            notes: newNotes
        });
    }

    render() {
        const { notes } = this.state;

        return (
            <Grid>
                <Row>
                    <NoteEditor onNoteAdd={this.handleNoteAdd} />
                    <NotesGrid notesArray={notes} />
                </Row>
            </Grid>
        );
    }
}
