import React from "react";
import Particles from "./components/particles";
import TooltipComponent from "./components/link";
const navigation = [
  { name: "whoami", href: "/whoami", descr: ""},
  { name: "projects", href: "/projects", descr: "An overview to my projects."},
  { name: "console", href: "/terminal", descr: "A peek into my world."},
  { name: "contact", href: "/contact", descr: ""},
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
			<TooltipComponent url={item.href} text={item.name} descr={item.descr} />
          ))
		  }
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        cykrim
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Knowledge is an endless journey.
        </h2>
      </div>
    </div>
  );
}
