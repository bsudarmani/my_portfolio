// Import necessary dependencies
import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
        <div>   
      {/* Animated Cursor Configuration */}
      <AnimatedCursor
        // Inner dot: Small and black
        color="0, 0, 0" // Black color for inner
        innerSize={7.5}
        innerScale={0.10}
        // Outer dot: Medium-sized and green
        outerSize={35}
        outerScale={2.5}
        outerAlpha={0.5}
        outerStyle={{
          backgroundColor: "rgba(24, 210, 110, 0.5)", // Green with opacity
          borderRadius: "50%",
        }}
        clickables={[
          "a",
          "button",
          ".link",
          ".custom",
          "input[type='text']",
          "input[type='email']",
          "input[type='number']",
          "input[type='submit']",
          "input[type='image']",
          "label[for]",
          "select",
          "textarea",
        ]}
      />
    </div>
  );
}
