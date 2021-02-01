declare namespace INote {
    export interface IProps {
        note: {
            _id: number;
            title: string;
            description: string;
        };
    }
}

export { INote };
