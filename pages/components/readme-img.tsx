import React, { FC } from "react";

type Props = { width: number; height: number; children: React.ReactNode };

const ReadmeImg = ({ width, height, children }: Props) => {
  return (
    <svg
      fill="none"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject width={width} height={height}>
        <div {...{ xmlns: "http://www.w3.org/1999/xhtml" }}>
          <style>{`
              * {
                margin: 0;
                box-sizing: border-box;
              }
            `}</style>
          {children}
        </div>
      </foreignObject>
    </svg>
  );
};

export default ReadmeImg;
