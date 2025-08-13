import Image from "next/image";
import flagOfSpain from "./assets/Spain-flag.png";

interface SpainFlagProps {
  className?: string;
  rotate?: number;
  style?: React.CSSProperties;
}

export default function SpainFlag({ className, rotate = 0, style = {} }: SpainFlagProps) {
  const styleAdjusted: React.CSSProperties = {
    rotate: `${rotate}deg`,
    ...style,
  };

  return (
    <div className={`container-bandera h-fit w-fit ${className}`} style={styleAdjusted}>
      <div className="otro relative">
        <svg
          className="absolute left-px top-1 z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="4"
          viewBox="0 0 4 3"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="1.8" cy="1.5" r="0.8" stroke="gainsboro" fill="gainsboro" />
        </svg>

        <svg
          className="stick absolute left-px top-[2.5px]"
          xmlns="http://www.w3.org/2000/svg"
          width="3.5"
          height="40"
          viewBox="0 0 3 40"
          preserveAspectRatio="xMidYMid meet"
        >
          <line x1="2" y1="3" x2="2" y2="25" style={{ stroke: "gainsboro", strokeWidth: 2 }} />
        </svg>

        <Image className="flag size-7" src={flagOfSpain} alt="Spain flag" />
      </div>

      <style jsx>{`
        .otro {
          rotate: 2deg;
        }
        .container-bandera {
          margin-left: 10px;
          animation-delay: 50ms;
        }
        .flag {
          margin-left: 2.5px;
        }
      `}</style>
    </div>
  );
}
