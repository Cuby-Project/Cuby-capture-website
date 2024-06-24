'use client';
import {FC, PropsWithChildren} from "react";
import {ButtonParams} from "../interfaces.ts";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Button: FC<PropsWithChildren<ButtonParams>> = props => {
    let buttonStyle = {
        backgroundColor: props.color
    };

    return (
        <button style={buttonStyle} onClick={props.clickEvent}>
            {props.label}
            <FontAwesomeIcon icon={faPenNib} />
            <FontAwesomeIcon icon={faEnvelope} />
        </button>
    );
};