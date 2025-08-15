// components/FranceFlag.tsx
import Image from "next/image";
import flagOfFrance from "../assets/France-flag.png";

interface FranceFlagProps {
  className?: string;
  rotate?: number;
  style?: React.CSSProperties;
}

export default function FranceFlag({ className, rotate = 0, style = {} }: FranceFlagProps) {
  const styleAdjusted: React.CSSProperties = {
    rotate: `${rotate}deg`,
    transitionDuration: "1000ms",
    ...style,
  };

  return (
    <div className={`container-bandera h-fit w-fit transition ${className}`} style={styleAdjusted}>
      <div className="otro relative">
        <svg
          className="absolute left-[0px] top-1 z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="3.5"
          height="4"
          viewBox="0 0 4 3"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            className="stroke-slate-800 fill-slate-800 dark:stroke-[gainsboro] dark:fill-[gainsboro]"
            cx="1.8"
            cy="1.5"
            r="0.8"
          />
        </svg>

        <svg
          className="stick absolute left-[0px] top-[2.5px] z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="2.5"
          height="40"
          viewBox="0 0 3 40"
          preserveAspectRatio="xMidYMid meet"
        >
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="25"
            className="stroke-slate-800 fill-slate-800 dark:stroke-[gainsboro] dark:fill-[gainsboro]"
            style={{ strokeWidth: 2 }}
          />
        </svg>

        <Image className="flag size-7" src={flagOfFrance} alt="France flag" />
      </div>

      <style jsx>{`
        .container-bandera {
          margin-right: 5px;
        }
        .otro {
          rotate: -5deg;
        }
        .flag {
          margin-left: 2.5px;
        }
      `}</style>
    </div>
  );
}
