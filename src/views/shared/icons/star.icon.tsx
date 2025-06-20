import React from "react";

export function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      className={`${props.className || ""}`}
      viewBox="0 0 39 37"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.4789 0L23.9692 13.8197H38.5L26.7443 22.3607L31.2346 36.1803L19.4789 27.6393L7.72317 36.1803L12.2134 22.3607L0.457741 13.8197H14.9886L19.4789 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
