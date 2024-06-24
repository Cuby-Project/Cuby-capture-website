'use client';
import {TopBarParams} from "@/app/interfaces.ts";
import {TopBar} from "@/app/components/TopBar";

export default function HomeLayout () {

    let TopBarProps: TopBarParams = {
        color: "gray-1",
    };

    return (
        <>
            <TopBar color={TopBarProps.color} />
            <p>Hello, World! :)</p>
        </>
    );
};