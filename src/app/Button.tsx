import {FC, PropsWithChildren} from "react";

interface ButtonParams {
    color: string,
    label: string,
    icon: string,
    clickEvent: () => void
}

export const Button: FC<PropsWithChildren<ButtonParams>> = props => {
    let buttonStyle = {
        backgroundColor: props.color
    };

    return (
        <button style={buttonStyle} onClick={() => {props.clickEvent}}>
            {props.label}
        </button>
    );
};