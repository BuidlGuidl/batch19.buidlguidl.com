"use client";

import { FlagOfFrance } from "./FlagOfFrance";
import { FlagOfSpain } from "./FlagOfSpain";

interface FlagsProps {
  hoverTrigger: boolean;
}

export function Flags({ hoverTrigger }: FlagsProps) {
  return (
    <>
      <div id="banderas" className="absolute right-2 top-[-25px] flex" style={{ zIndex: -2 }}>
        <div className={hoverTrigger ? "animated" : ""}>
          <FlagOfFrance />
        </div>

        <div className="stroke-slate-300"></div>
        <div className={hoverTrigger ? "animated" : ""} style={{ animationDelay: "0.1s" }}>
          <FlagOfSpain />
        </div>
      </div>

      <style jsx>{`
        .animated {
          animation: moveRightLeft 2s;
        }

        @keyframes moveRightLeft {
          0% {
            transform: translateX(0) rotate(0deg);
          }
          20% {
            transform: translateX(-7px) rotate(-5deg);
          }
          30% {
            transform: translateX(7px) rotate(5deg);
          }
          50% {
            transform: translateX(-7px) rotate(-5deg);
          }
          70% {
            transform: translateX(7px) rotate(5deg);
          }
          80% {
            transform: translateX(7px) rotate(5deg);
          }
          100% {
            transform: translateX(0) rotate(0deg);
          }
        }
      `}</style>
    </>
  );
}
