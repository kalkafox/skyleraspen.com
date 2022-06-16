import { useCallback, useState, useEffect } from "react";

const setVideoLoaded = (states, springs) => {
  !states.vs.state && states.vs.set(true);
};

const Player = ({ states, springs }) => {
  return (
    <>
      <video
        className="fixed w-full h-full object-cover sepia-[.45] blur-sm"
        playsInline
        autoPlay
        loop
        muted
        preload={"auto"}
        onLoadedData={() => {
          setVideoLoaded(states, springs);
        }}>
        <source type="video/webm" src="bg/chicago_o.webm" />
      </video>
    </>
  );
};

export default Player;
