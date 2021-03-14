interface User {
    id?: string;
    username: string;
    email: string;
    password?: string;
    diaryIds: string[] | null;
}

export interface AuthState {
    token: string | null;
    loading: boolean;
    user: User[] | null;
}

