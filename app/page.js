'use client'
import Image from "next/image";
import BobAction from "./components/bob-action";
import { useState } from "react";

export default function Home() {
  const [bg, setBg] = useState(false);
  return (
    <main className="flex flex-1 min-h-screen flex-col items-center justify-between p-24 backgdark">
      <BobAction classNames={"relative"} setBg={setBg} bg={bg} />
    </main>
  );
}
