'use client';
import {ButtonParams} from "./interfaces.ts";
import HomeLayout from "./layouts/HomeLayout";
import CaptureLayout from "./layouts/CaptureLayout";
import EndLayout from "./layouts/EndLayout";

let currentPageLayout = "home";

export default function Home() {
  return (
      <>
          {currentPageLayout === "home" && <HomeLayout />}
          {currentPageLayout === "capture" && <CaptureLayout />}
          {currentPageLayout === "end" && <EndLayout />}
      </>
  );
}