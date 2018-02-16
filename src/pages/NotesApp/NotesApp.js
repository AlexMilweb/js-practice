import React, { PureComponent } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NoteEditor from './NoteEditor/NoteEditor';
import NotesGrid from './NotesGrid/NotesGrid';

export default class NotesApp extends PureComponent {
    render() {
        return (
            <Grid>
                <Row>
                    <NoteEditor />
                    <NotesGrid />
                </Row>
            </Grid>
        );
    }
}
