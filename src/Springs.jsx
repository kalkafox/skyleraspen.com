import { useSpring } from "react-spring";

export const Springs = () => {
  const [loadSpring, loadSpringApi] = useSpring(() => ({
    config: {
      friction: 10,
    },
    from: {
      scale: 0,
    },
    to: { scale: 1 },
  }));

  const [videoSpring, videoSpringApi] = useSpring(() => ({
    config: {
      friction: 25,
    },
    from: {
      opacity: 0,
      scale: 1,
      x: 0,
      y: 0,
    },
  }));

  const [textSpring, textSpringApi] = useSpring(() => ({
    config: {
      fiction: 30,
    },
    from: {
      opacity: 0,
      scale: 0.5,
      x: 1080,
    },
  }));

  return {
    ls: {
      spring: loadSpring,
      set: loadSpringApi,
    },
    vs: {
      spring: videoSpring,
      set: videoSpringApi,
    },
    ts: {
      spring: textSpring,
      set: textSpringApi,
    },
  };
};
