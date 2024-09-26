'use client';
import HomeLayout from "./layouts/HomeLayout";
import CaptureLayout from "./layouts/CaptureLayout";
import EndLayout from "./layouts/EndLayout";
import { SessionProvider} from "@/app/providers/sessionProvider";

let currentPageLayout = "home";

export default function Home() {
  return (
      <SessionProvider>
          {currentPageLayout === "home" && <HomeLayout />}
          {currentPageLayout === "capture" && <CaptureLayout />}
          {currentPageLayout === "end" && <EndLayout />}
      </SessionProvider>
  );
}