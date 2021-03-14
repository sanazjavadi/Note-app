interface User {
    id?: string;
    name: string;
    email: string;
    password?: string;
}
interface CurrentNoteBook {
    name: string;
    id?: null;
}

interface CurrentNote {
    name: string;
    id?: null;
}
export interface AuthState {
    token: string | null;
    loading: boolean;
    user: User[] | null;
}

export interface Notebook {
    _id: null;
    title: string;
    description: string;
}

export interface NotebooksState {
    notebooks: Array<Notebook>;
    loading: boolean;
    currentNoteBook: CurrentNoteBook;
}

export interface NoteState {
    notes: [];
    currentNote: CurrentNote;
    loading: boolean;
}

export interface ModalState {
    noteModal: boolean;
    notebookModal: boolean;
    editModal: boolean;
    optionsModal: boolean;
}

export interface ThemeState {
    themes: Array<string>;
    current: string;
    theme: string;
}
