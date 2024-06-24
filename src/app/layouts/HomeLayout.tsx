'use client';
import {Button} from "@/app/components/Button";
import {ButtonParams} from "@/app/interfaces.ts";

export default function HomeLayout () {

    let buttonProps: ButtonParams = {
        color: "primary",
        label: "Click Me!",
        icon: "fas fa-hand-pointer",
        clickEvent: () => {
            console.log("Button Clicked!");
        }
    }

    return (
        <>
            <p>Hello, World! :)</p>

            <Button color={buttonProps.color}
                    label={buttonProps.label}
                    icon={buttonProps.icon}
                    clickEvent={buttonProps.clickEvent} />
        </>
    );
};