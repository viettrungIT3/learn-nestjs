import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <div>
        Mode theme: <ModeToggle />
      </div>
    </main>
  );
}
