import React, { PureComponent } from 'react';
import { Grid, Row } from 'react-bootstrap';
import NoteEditor from './NoteEditor/NoteEditor';
import NotesGrid from './NotesGrid/NotesGrid';

export default class NotesApp extends PureComponent {
    state = {
        notes: []
    }

    componentDidMount() {
        const localNotes = JSON.parse(localStorage.getItem('notes'));

        if (localNotes) {
            this.setState({
                notes: localNotes
            });
        }
    }

    componentDidUpdate() {
        this.updateLocalStorage();
    }

    handleNoteAdd = newNote => {
        const newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);

        this.setState({
            notes: newNotes
        });
    }

    handleNoteDelete = noteId => {
        const newNotes = this.state.notes.filter(note => {
            return note.id !== noteId;
        });

        this.setState({
            notes: newNotes
        });
    }

    updateLocalStorage = () => {
        const notes = JSON.stringify(this.state.notes);

        localStorage.setItem('notes', notes);
    }

    render() {
        const { notes, colorNote } = this.state;

        return (
            <Grid>
                <Row>
                    <NoteEditor
                        onNoteAdd={this.handleNoteAdd}
                    />
                    <NotesGrid
                        onDelete={this.handleNoteDelete}
                        notesArray={notes}
                        colorNote={colorNote}
                    />
                </Row>
            </Grid>
        );
    }
}
