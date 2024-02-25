"use client";
import { useState } from "react";
import Link from "next/link";

interface Props {
  url: string;
  text: string;
  descr: string;
}

const TooltipComponent = ({ url,text,descr } : Props) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  if (descr==="") {
    <Link
        href={url}
        className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 relative z-10"
      >
        {text}
    </Link>
  }
  return (
    <div className="relative">
      <div
        className={`absolute my-6 bottom-0 left-0 text-white p-1 opacity-0 transition-opacity duration-500 ${
          isTooltipVisible ? "opacity-100" : ""
        }`}
      >
        <p className="text-xs">{descr}</p>
      </div>
      <Link
        href={url}
        className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 relative z-10"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {text}
      </Link>
    </div>
  );

};

export default TooltipComponent;
