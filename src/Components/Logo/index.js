import React from "react";

import "./styles.css";

export const Logo = (props) => (
  <svg
    className="Svg"
    width={423.087}
    height={122}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="38.456 14 423.087 122"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient id="b" x1={-0.414} x2={1.414} y1={0.093} y2={0.907}>
        <stop offset={0} stopColor="#007fce" />
        <stop offset={1} stopColor="#7f857d" />
      </linearGradient>
      <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
        <feFlood
          floodColor="#000"
          floodOpacity={0.5}
          result="flood"
          x={10}
          y={10}
          width={480}
          height={130}
        />
        <feFlood floodColor="#f8f9f8" result="flood-stroke" />
        <feFlood floodColor="#0579c1" result="flood-outline" />
        <feFlood floodColor="#30a7b0" result="flood-shadow" />
        <feImage
          x={0}
          y={0}
          width={500}
          height={150}
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSI1MDAiIGhlaWdodD0iMTUwIj48cmFkaWFsR3JhZGllbnQgaWQ9ImluY3JlZGlibGUtZ3JhZGllbnQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U0ZTRlNCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9InVybCgjaW5jcmVkaWJsZS1ncmFkaWVudCkiLz48L3N2Zz4="
          result="image"
        />
        <feImage
          x={0}
          y={0}
          width={10}
          height={10}
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiLz48L3N2Zz4="
          result="dot"
        />
        <feTile in="dot" result="tile" />
        <feGaussianBlur stdDeviation={1.5} result="blur-tile" />
        <feBlend in2="image" in="blur-tile" mode="soft-light" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0" />
        <feComponentTransfer result="func">
          <feFuncA type="linear" slope={20} intercept={-10.5} />
        </feComponentTransfer>
        <feComposite operator="out" in="flood" in2="func" result="dots" />
        <feOffset dx={3} dy={1} in="SourceAlpha" />
        <feComposite operator="out" in2="SourceAlpha" />
        <feComponentTransfer result="extrude">
          <feFuncA type="linear" slope={0.7} intercept={-0.1} />
        </feComponentTransfer>
        <feMorphology
          operator="dilate"
          radius={5}
          in="SourceGraphic"
          result="dilate"
        />
        <feComposite
          operator="in"
          in="flood-stroke"
          in2="dilate"
          result="stroke"
        />
        <feOffset dx={1} result="stroke-offset" />
        <feMorphology operator="dilate" radius={2} result="dilate-outline" />
        <feComposite
          operator="in"
          in="flood-outline"
          in2="dilate-outline"
          result="outline"
        />
        <feComposite operator="in" in="flood-shadow" in2="outline" />
        <feGaussianBlur stdDeviation={3} />
        <feComponentTransfer>
          <feFuncA type="linear" slope={0.7} intercept={-0.2} />
        </feComponentTransfer>
        <feOffset dy={4} result="offset-shadow" />
        <feMerge>
          <feMergeNode in="dots" />
          <feMergeNode in="offset-shadow" />
          <feMergeNode in="outline" />
          <feMergeNode in="stroke-offset" />
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="extrude" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        d="M26.05-29.57q.96-1.92.96-3.71t-.19-2.78q-.2-1-.64-1.76-.96-1.67-2.88-1.67-2.37 0-4.29 1.73-2.05 1.79-2.05 4.61 0 1.79 1.25 3.17 1.25 1.37 3.17 2.65 1.92 1.28 4.09 2.56 2.18 1.28 4.1 2.82 4.41 3.52 4.41 8.25 0 3.2-1.69 5.92-1.7 2.72-4.51 4.71-6.15 4.35-14.28 4.35-6.59 0-9.98-2.14Q.13-3.01.13-6.27q0-5.83 4.54-7.3 1.28-.45 3.23-.45 1.96 0 4.2.84-1.03 2.62-1.03 4.99 0 5.12 3.65 5.12 2.37 0 4.32-1.73 1.95-1.73 1.95-3.68 0-1.95-1.25-3.36-1.24-1.41-3.1-2.53-1.86-1.12-4-2.21-2.14-1.08-4-2.62-4.35-3.52-4.35-9.15 0-3.65 1.79-6.5t4.67-4.77q5.76-3.9 12.83-3.9 7.08 0 10.5 2.11t3.42 5.7q0 3.13-2.43 5.12-2.11 1.66-4.67 1.66t-4.35-.64ZM39.87-6.4q0-1.73.9-6.08l3.39-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.08l-1.54 6.98h4.99l-.57 2.88h-4.93L53.5-12.48q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.27 0-5.12-2.05-1.86-2.05-1.86-5.63Zm35.78 7.68q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.51-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.59 5.89Zm1.66-27.84q-.77 1.73-1.37 4.32-.61 2.59-1.38 6.69-.77 4.09-.77 9.15 0 1.66.55 2.75.54 1.09 2.01 1.09 1.47 0 2.4-.7.93-.71 1.63-2.37 1.28-2.95 2.31-8.42 1.02-5.47 1.12-7.84.09-2.37.09-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62Zm42.24 8.58q2.31-4.1 2.31-8.26 0-2.75-1.99-2.75-1.53 0-3.13 2.62-1.67 2.63-2.18 6.02L111.23 0 97.98 1.28l6.53-33.92 10.56-1.28-1.15 6.46q3.14-6.46 10.18-6.46 3.71 0 5.72 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.69-.76Zm39.23 7.16q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92Zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63Zm62.46 19.07q-8.19 0-8.96-11.65h-11.01q-1.28 2.95-2.17 5.51L184.38 0h-8.96l20.16-42.24h13.76l2.69 31.1q.64 6.72 3.2 8.71-1.85 3.71-7.04 3.71Zm-14.46-24.45-3.52 8.13h8.83l-.77-16.45v-1.73l-4.54 10.05Zm55.04 18.79q-2.69 2.72-6.37 4.19-3.68 1.47-7.33 1.47t-4.93-.64l-1.98 10.88-12.99 1.28L224-32.64l10.43-1.09-.83 4.42q2.69-4.55 8.26-4.55 6.27 0 9.6 4.04 2.94 3.64 2.94 9.21t-1.47 9.54q-1.47 3.97-4.16 6.69ZM234.3-22.34l-3.39 18.76q1.35 1.15 3.01 1.15 1.66 0 2.62-.64.96-.64 1.67-1.92 1.92-3.46 3.45-13.95.45-3.08.45-6.08 0-3.01-.67-3.97-.67-.96-1.95-.96-3.91 0-5.19 7.61Zm53.76 17.96q-2.68 2.72-6.36 4.19-3.68 1.47-7.33 1.47t-4.93-.64l-1.98 10.88-13 1.28 8.84-45.44 10.43-1.09-.83 4.42q2.68-4.55 8.25-4.55 6.27 0 9.6 4.04 2.95 3.64 2.95 9.21t-1.48 9.54q-1.47 3.97-4.16 6.69ZM273.6-22.34l-3.39 18.76q1.34 1.15 3.01 1.15 1.66 0 2.62-.64.96-.64 1.66-1.92 1.92-3.46 3.46-13.95.45-3.08.45-6.08 0-3.01-.67-3.97-.68-.96-1.96-.96-3.9 0-5.18 7.61Z"
        fill="url(#b)"
        transform="translate(103.085 103.16)"
      />
    </g>
  </svg>
);
