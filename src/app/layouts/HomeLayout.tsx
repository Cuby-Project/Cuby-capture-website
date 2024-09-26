'use client';
import {useSession} from "@/app/providers/sessionProvider";
import {ButtonParams, TopBarParams} from "@/app/interfaces";
import {TopBar} from "@/app/components/TopBar";
import {Button} from "@/app/components/Button";
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function HomeLayout () {
    const session = useSession();

    const TopBarProps: TopBarParams = {
        color: "gray-1",
    };

    const ButtonProps: ButtonParams = {
        color: "#009FFD",
        label: "Capture your cube",
        icon: faCamera,
        clickEvent: () => alert("Hello, World!")
    }

    return (
        <>
            <TopBar color={TopBarProps.color} />
            <div className="flex flex-col h-5/6 justify-between items-center">
                <p className="m-5 text-center">{session?.languageService.getText("tutorial-text") ?? "bite"}</p>
                <div className="flex flex-col items-center">
                    <img src="tutorial-image.png" alt="logo" className="w-4/6"/>
                    <Button {...ButtonProps}/>
                </div>
            </div>
        </>
    );
};