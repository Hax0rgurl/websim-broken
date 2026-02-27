import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Sequence, spring, random } from "remotion";
const GlitchText = ({ text, delay, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const shakeX = random(`x-${frame}-${text}`) * 10 - 5;
  const shakeY = random(`y-${frame}-${text}`) * 4 - 2;
  const opacity = interpolate(frame, [delay, delay + 10], [0, 1]);
  const flicker = frame % 15 === 0 ? 0.5 : 1;
  return /* @__PURE__ */ jsxDEV("h1", { style: {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: "80px",
    color,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: `translate(calc(-50% + ${shakeX}px), calc(-50% + ${shakeY}px))`,
    opacity: opacity * flicker,
    textShadow: `2px 2px 0px ${color === "white" ? "#00ff41" : "white"}`,
    whiteSpace: "nowrap"
  }, children: text }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 17,
    columnNumber: 9
  });
};
const Scanline = () => {
  const frame = useCurrentFrame();
  const top = interpolate(frame % 100, [0, 100], [0, 100]);
  return /* @__PURE__ */ jsxDEV("div", { style: {
    position: "absolute",
    top: `${top}%`,
    left: 0,
    width: "100%",
    height: "2px",
    background: "rgba(0, 255, 65, 0.5)",
    boxShadow: "0 0 10px #00ff41",
    zIndex: 10
  } }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 38,
    columnNumber: 9
  });
};
const MyComposition = () => {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const bgOpacity = interpolate(frame, [0, 60], [0, 1]);
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#0a0a0a", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      backgroundImage: "linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      opacity: 0.3,
      transform: `perspective(500px) rotateX(60deg) translateY(${frame}px) scale(2)`
    } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 61,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(Sequence, { from: 0, durationInFrames, children: /* @__PURE__ */ jsxDEV(Scanline, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 69,
      columnNumber: 17
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 68,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(Sequence, { from: 20, durationInFrames: 80, children: /* @__PURE__ */ jsxDEV(GlitchText, { text: "HUMAN", delay: 0, color: "white" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 73,
      columnNumber: 17
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 72,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(Sequence, { from: 80, durationInFrames: 80, children: /* @__PURE__ */ jsxDEV(GlitchText, { text: "& MACHINE", delay: 0, color: "#00ff41" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 77,
      columnNumber: 17
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 76,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(Sequence, { from: 160, durationInFrames: 140, children: /* @__PURE__ */ jsxDEV(GlitchText, { text: "FUTURE IS NOW", delay: 0, color: "white" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 81,
      columnNumber: 18
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 80,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      background: "radial-gradient(circle, transparent 40%, #000 150%)",
      pointerEvents: "none"
    } }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 84,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 58,
    columnNumber: 9
  });
};
export {
  MyComposition
};
