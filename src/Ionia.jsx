import { animated as a } from "react-spring";
import { useRef } from "react";
import dynamic from "next/dynamic";

import Button from "../src/Button";
import { States } from "../src/States";
import { Springs } from "../src/Springs";
import { useEffect } from "react";
import Head from "next/head";

const Ionia = () => {
  const states = States();
  const springs = Springs();

  useEffect(() => {
    console.log(states.vs.state);
    states.vs.state && springs.ls.set({ to: { scale: 0 } });
    states.vs.state &&
      springs.vs.set.start({
        to: {
          opacity: 1,
          scale: 1.1,
        },
      });
    states.vs.state &&
      springs.ts.set.start({
        to: {
          opacity: 1,
          scale: 1,
          x: 0,
        },
      });
  }, [states.vs.state]);

  const mouseEvent = (e) => {
    springs.vs.set.start({
      to: {
        x: -e.movementX / 4,
        y: -e.movementY / 4,
      },
    });
  };

  const mouseEnterEvent = () => {
    springs.vs.set.start({ to: { scale: 1.2 } });
  };

  const mouseLeaveEvent = () => {
    springs.vs.set.start({ to: { scale: 1.1, x: 0, y: 0 } });
  };

  let scale = 1.1;

  const mouseWheelEvent = (e) => {
    scale = scale >= 1.2 ? scale + -e.deltaY / 1000 : 1.2;
    scale = scale > 2 ? 2 : scale;
    console.log(scale);
    springs.vs.set.start({ to: { scale: scale } });
  };

  const audio = useRef();
  const VideoComponent = dynamic(() => import("../src/Player"), {
    ssr: false,
  });

  return (
    <div
      onMouseMove={mouseEvent}
      onMouseEnter={mouseEnterEvent}
      onMouseLeave={mouseLeaveEvent}
      onWheel={mouseWheelEvent}
      className="dark:bg-black bg-white">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <audio ref={audio} playsInline loop autoPlay controls={false}>
        <source src="/audio/alone.ogg" type="audio/ogg"></source>
      </audio>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="fixed z-20 top-5 left-5">
          <Button audio={audio} states={states} />
        </div>
        <a.div style={springs.ts.spring} className="fixed z-20 top-20">
          <p className="font-[Lato] text-white/70 border-white/70 hover:border-white backdrop-blur-3xl hover:text-white transition-colors text-8xl p-3 border-8 overflow-hidden flex-row-1">
            skyleraspen.org
          </p>
        </a.div>
        <a.div style={springs.ls.spring} className="z-10">
          <svg
            role="status"
            className="w-48 h-48 mr-2 text-gray-200 animate-spin dark:text-transparent fill-orange-900"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </a.div>
        <div className="fixed w-full h-full z-[5] bg-black/40"></div>
        <a.div
          style={springs.vs.spring}
          className="fixed w-full h-full inline-block ">
          <VideoComponent states={states} springs={springs} />
        </a.div>
      </div>
    </div>
  );
};

export default Ionia;
