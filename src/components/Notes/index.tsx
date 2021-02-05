/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notesState, searchNotes } from '../../reducers/notes';
import useInput from '../../hooks/useInput';
import Input from '../Input';

// components
import Note from '../Note';

// assets
import SearchIcon from '../../svg/MagnifiyingGlass';
import Loading from '../../svg/Loading';

const Notes: React.FC = () => {
    const { notes, loading } = useSelector(notesState);
    const dispatch = useDispatch();
    const searchTerm = useInput('');
    const handleSearch = (e) => {
        searchTerm.onChange(e);
        dispatch(searchNotes(searchTerm.value));
    };
    return (
        <div className="notes-section text-center flex fixed flex-col items-center border-theme h-screen">
            <div className="p-8 w-full">
                <div className="flex items-center rounded-3xl relative max-w-max">
                    <Input
                        className="focus:outline-none app-input w-full rounded-full py-3 px-6 "
                        value={searchTerm.value}
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search"
                        error=""
                    />

                    <button
                        onClick={() => dispatch(searchNotes(searchTerm.value))}
                        type="submit"
                        className="absolute right-0 top-0 mt-4 mr-4 w-4 h-4 focus:border-0"
                    >
                        <SearchIcon className="app-svg " />
                    </button>
                </div>
            </div>
            {!loading ? (
                notes.length ? (
                    notes.map((note?: any) => <Note note={note} key={note.title} />)
                ) : (
                    <div className="mt-5">No Notes Yet !</div>
                )
            ) : (
                <div>
                    <Loading className="app-svg" />
                </div>
            )}
        </div>
    );
};

export default Notes;
