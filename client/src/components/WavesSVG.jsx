import React from "react";

const WavesSVG = (props) => {
  const { fill, height, width } = props;
  let shade, tint;
  if (fill.includes("rgb")) {
    const fillValues = fill.slice(4, -1).split(",");
    const shadeValues = fillValues.map((val) => {
      if (val * 0.9 > 0) {
        return val * 0.9;
      }
      return 0;
    });
    shade = `rgb(${shadeValues.join(",")})`;
    const tintValues = fillValues.map((val) => {
      if (val * 1.1 < 255) {
        return val * 1.1;
      }
      return 255;
    });
    tint = `rgb(${tintValues.join(",")})`;
  }

  return (
    <div>
      <div style={{ position: "relative" }} {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.8662 -2.1465 71.87 25.17"
          style={{ position: "absolute" }}
          height={height}
          width={width}
        >
          <path
            d="M 38 22 C 33 23 30 23 25 22 C 21 21 19 21 15 22 C -1 27 -4 12 2 12 C 10 -7 21 -3 22 2 C 12 -2 11 6 15 12 C 17 15 23 15 25 12 C 33 -7 44 -3 45 2 C 35 -2 34 6 38 12 C 40 15 46 15 48 12 C 56 -7 67 -3 68 2 C 58 -2 57 6 61 12 C 63 15 69 15 71 12 C 71 21 63 21 61 22 C 56 23 53 23 48 22 C 44 21 42 21 38 22 Z"
            fill={tint}
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.8662 -2.1465 71.87 25.17"
          style={{ position: "absolute" }}
          height={height}
          width={width}
        >
          <path
            d="M 38 22 C 33 23 30 23 25 22 C 21 21 19 21 15 22 C -1 27 -4 12 2 12 C 10 -7 21 -3 22 2 C 12 -2 11 6 15 12 C 17 15 23 15 25 12 C 33 -7 44 -3 45 2 C 35 -2 34 6 38 12 C 40 15 46 15 48 12 C 56 -7 67 -3 68 2 C 58 -2 57 6 61 12 C 63 15 69 15 71 12 C 71 21 63 21 61 22 C 56 23 53 23 48 22 C 44 21 42 21 38 22 Z"
            fill={shade}
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-0.8662 -2.1465 71.87 25.17"
          style={{ position: "absolute" }}
          height={height}
          width={width}
        >
          <path
            d="M 38 22 C 33 23 30 23 25 22 C 21 21 19 21 15 22 C -1 27 -4 12 2 12 C 10 -7 21 -3 22 2 C 12 -2 11 6 15 12 C 17 15 23 15 25 12 C 33 -7 44 -3 45 2 C 35 -2 34 6 38 12 C 40 15 46 15 48 12 C 56 -7 67 -3 68 2 C 58 -2 57 6 61 12 C 63 15 69 15 71 12 C 71 21 63 21 61 22 C 56 23 53 23 48 22 C 44 21 42 21 38 22 Z"
            fill={fill}
          />
        </svg>
      </div>
    </div>
  );
};

export default WavesSVG;
