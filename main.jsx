import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { MyComposition } from "./composition.jsx";
const root = createRoot(document.getElementById("app"));
root.render(
  /* @__PURE__ */ jsxDEV("div", { style: { width: "100%", height: "100%", maxWidth: "800px", aspectRatio: "16/9", border: "1px solid #333", background: "#000" }, children: /* @__PURE__ */ jsxDEV(
    Player,
    {
      component: MyComposition,
      durationInFrames: 300,
      fps: 30,
      compositionWidth: 1280,
      compositionHeight: 720,
      loop: true,
      controls: true,
      autoPlay: true,
      style: { width: "100%", height: "100%" },
      inputProps: {}
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 5
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 9,
    columnNumber: 3
  })
);
