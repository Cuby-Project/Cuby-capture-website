'use client';
import { Button } from "./Button";
import {ButtonParams} from "./interfaces.ts";

export default function Home() {
  let buttonProps:ButtonParams = {
      color: "",
      label: "Hello",
      icon: "",
      clickEvent: () => {
        console.log("Coucou pute");
      }
  };

  return (
      <>
        <p>Hello, World! :)</p>

        <Button color={buttonProps.color}
                label={buttonProps.label}
                icon={buttonProps.icon}
                clickEvent={buttonProps.clickEvent} />
      </>
  );
}