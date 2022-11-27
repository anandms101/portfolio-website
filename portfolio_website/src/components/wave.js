import React from "react";
import Wave from "react-wavify";

function WaveEffect() {
  return (
    <Wave
      fill="#1a4569"
      paused={false}
      options={{
        height: 20,
        amplitude: 20,
        speed: 0.15,
        points: 3,
      }}
    />
  );
}

export default WaveEffect;
