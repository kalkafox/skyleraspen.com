import { useState } from "react";

export const States = () => {
  const [videoState, videoStateSet] = useState(false);
  const [audioState, audioStateSet] = useState(false);
  return {
    vs: {
      state: videoState,
      set: videoStateSet,
    },
    as: {
      state: audioState,
      set: audioStateSet,
    },
  };
};
