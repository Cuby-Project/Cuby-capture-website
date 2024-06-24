'use client';
import {FC, PropsWithChildren} from "react";
import {TopBarParams} from "../interfaces.ts";
import React from 'react'

export const TopBar: FC<PropsWithChildren<TopBarParams>> = props => {
    let buttonStyle = {
        backgroundColor: props.color
    };

    return (
        <>
            <div className={"w-full " + props.color == "gray-1" ? "bg-custom-gray-1" : "bg-gradient-to-b from-black to-transparent" + " h-24"} >
                <div className="">
                    <h1>Cuby</h1>
                </div>
            </div>
        </>
    );
};