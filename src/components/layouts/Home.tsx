import {useSession} from "../../core/providers/sessionProvider.tsx";
import { Button } from "../Button.tsx";
import {TopBar} from "../TopBar.tsx";
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import {TopBarParams, ButtonParams} from "../interfaces.ts";


export default function Home() {
    const { languageService } : any = useSession();

    const TopBarProps: TopBarParams = {
        color: "gray-1",
    };

    const ButtonProps: ButtonParams = {
        color: "blue",
        label: "Capture your cube",
        icon: faCamera,
        clickEvent: () => alert("Hello, World!")
    }

    return  <>
                <TopBar color={TopBarProps.color} />
                <div className="flex flex-col h-5/6 justify-between items-center">
                    <p className="m-5 text-center">{languageService?.getText("tutorial-text")}</p>
                    <div className="flex flex-col items-center">
                        <img src="/tutorial-image.png" alt="logo" className="w-4/6"/>
                        <Button {...ButtonProps}/>
                    </div>
                </div>
            </>
}