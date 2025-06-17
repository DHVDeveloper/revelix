import React from "react"

export function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={`${props.className || ""}`} {...props}>
      <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
  )
}
