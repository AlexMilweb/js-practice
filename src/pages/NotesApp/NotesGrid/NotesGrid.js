import React, { PureComponent } from 'react';
import { array } from 'prop-types';
import Note from '../Note/Note';
import Masonry from 'masonry-layout';
import './NotesGrid.css';

export default class NotesGrid extends PureComponent {
    static propTypes = {
        notesArray: array.isRequired
    }

    componentDidUpdate(prevProps) {
        if (this.props.notesArray !== prevProps.notesArray) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    componentDidMount() {
        this.msnry = new Masonry( this.grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10
        });
    }

    refGrid = ref => {
        this.grid = ref;
    }

    render() {
        const { notesArray } = this.props;

        return (
            <div>
                <ul ref={this.refGrid} className='notesGrid__list'>
                    {notesArray.map(note => {
                        return (
                            <Note
                                key={note.id}
                                noteText={note.noteText}
                                color={note.color}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
