import React from "react";

export function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className || ""}`}
      {...props}
    >
      <line x1="41" y1="21.5" x2="-1.31134e-07" y2="21.5" stroke="currentColor" strokeWidth="3" />
      <line x1="20.5" y1="6.55671e-08" x2="20.5" y2="40" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
