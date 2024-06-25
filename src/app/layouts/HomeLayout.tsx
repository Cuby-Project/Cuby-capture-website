'use client';
import {TopBarParams} from "@/app/interfaces.ts";
import {TopBar} from "@/app/components/TopBar";
import {Button} from "@/app/components/Button";

export default function HomeLayout () {

    let TopBarProps: TopBarParams = {
        color: "gray-1",
    };

    return (
        <>
            <TopBar color={TopBarProps.color} />
            <p>Hello, World! :)</p>
            <Button label="Click me!" color="blue" clickEvent={() => alert("Hello, World!")}  icon={""}/>
        </>
    );
};