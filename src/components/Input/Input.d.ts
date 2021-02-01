declare namespace IInput {
    export interface IProps {
        type: string;
        placeholder: string;
        error: string;
        className: string;
        value: any;
        onChange: () => void;
    }
}

export { IInput };
