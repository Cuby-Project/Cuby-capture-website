'use client';
import {FC, PropsWithChildren} from "react";
import {ButtonParams} from "./interfaces.ts";

export const Button: FC<PropsWithChildren<ButtonParams>> = props => {
    let buttonStyle = {
        backgroundColor: props.color
    };

    return (
        <button style={buttonStyle} onClick={props.clickEvent}>
            {props.label}
        </button>
    );
};