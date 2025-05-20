import {FC, PropsWithChildren} from "react";
import {TopBarParams} from "../../../backup/src/app/interfaces.ts";

export const TopBar: FC<PropsWithChildren<TopBarParams>> = props => {
    return (
        <div className={"w-full " + (props.color === "gray-1" ? "bg-gray-1" : "bg-gradient-to-b from-black to-transparent" + " h-1/6")} >
            <div className="flex items-center justify-center p-5">
                <div>
                    <img src="/icon.png" alt="logo" className={"h-14"}/>
                </div>
                <div className={"font-bold text-4xl ml-3"}>Cuby</div>
            </div>
        </div>
    );
};