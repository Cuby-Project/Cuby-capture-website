'use client';
import {FC, PropsWithChildren} from "react";
import {ButtonParams} from "../interfaces";
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Button: FC<PropsWithChildren<ButtonParams>> = props => {
    const buttonStyle = {
        backgroundColor: props.color,
        borderRadius: '20px',
        padding: '18px',
        width: '90vw'
    };

    return (
        <button style={buttonStyle} onClick={props.clickEvent}>
            <FontAwesomeIcon className="fa-xl" icon={props.icon}/>
            <span className="ml-3 font-semibold">{props.label}</span>
        </button>
    );
};