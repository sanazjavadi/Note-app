declare namespace IInput {
    export interface IProps {
        type: string;
        placeholder: string;
        error: string;
        className: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value: any;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
}

export { IInput };
