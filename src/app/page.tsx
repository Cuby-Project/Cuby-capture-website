import Image from "next/image";
import { Button } from "./Button"

export default function Home() {
  let buttonProps = {color: "", label: "Hello", icon: "", onClick: () => {
      console.log("Coucou pute");
      }};

  return (
      <>
        <p>Hello, World! :)</p>

        <Button color={buttonProps.color}
                label={buttonProps.label}
                icon={buttonProps.icon}
                clickEvent={buttonProps.onClick} />
      </>
  );
}