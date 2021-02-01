/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import { notesState } from '../../reducers/notes';

// components
import Note from '../Note';

// assets
import SearchIcon from '../../svg/MagnifiyingGlass';
import Loading from '../../svg/Loading';

const Index: React.FC = () => {
    const { notes, loading } = useSelector(notesState);

    return (
        <div className="middle-notes text-center flex fixed flex-col items-center border-theme h-screen">
            <div className="p-8 w-full">
                <div className="flex items-center rounded-3xl  relative ">
                    <input
                        className="focus:outline-none app-input w-full rounded-full py-3 px-6 "
                        id="search"
                        type="text"
                        placeholder="Search"
                    />

                    <button type="submit" className="absolute right-0 top-0 mt-4 mr-4 w-4 h-4 focus:border-0">
                        <SearchIcon className="app-svg " />
                    </button>
                </div>
            </div>
            {!loading ? (
                notes.length ? (
                    notes.map((note?: any) => <Note note={note} />)
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

export default Index;
