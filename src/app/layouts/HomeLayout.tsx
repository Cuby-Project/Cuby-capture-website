'use client';
import {TopBarParams} from "@/app/interfaces";
import {TopBar} from "@/app/components/TopBar";
import {Button} from "@/app/components/Button";
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function HomeLayout () {

    let TopBarProps: TopBarParams = {
        color: "gray-1",
    };

    return (
        <>
            <TopBar color={TopBarProps.color} />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eligendi est porro quae totam voluptatibus! Cumque dolor eligendi illum porro saepe sint totam! Enim laboriosam maiores molestias neque recusandae vero.</p>
            <Button label="Capture your cube" color="#009FFD" clickEvent={() => alert("Hello, World!")}  icon={faCamera}/>
        </>
    );
};