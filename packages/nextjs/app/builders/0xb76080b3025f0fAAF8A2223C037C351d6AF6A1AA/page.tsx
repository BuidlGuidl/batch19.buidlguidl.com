"use client";

import { useState } from "react";
import Flags from "./components/Flags";
import { Address } from "~~/components/scaffold-eth";

export default function Page() {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    if (hover) return;
    setHover(true);

    // Reinicia la animación después de 2.2s
    setTimeout(() => {
      setHover(false);
    }, 2200);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 p-10" onMouseEnter={() => handleMouseEnter()}>
        <div className="absolute card w-96 bg-base-100 card-lg shadow-sm">
          <Flags hoverTrigger={hover} />
          <div className="card-body">
            <h2 className="card-title">Ethan Rouimi</h2>
            <p>A neovim purist</p>
            <div className="justify-center card-actions flex flex-col">
              <div>
                <h3>Socials</h3>
              </div>

              <Address address="0xb76080b3025f0fAAF8A2223C037C351d6AF6A1AA" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
