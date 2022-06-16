import {
  faArrowRotateRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ audio, states }) => {
  const [buttonState, buttonStateApi] = useState(false);
  const handleAudio = (audio, states) => {
    if (!states.vs.state) {
      return;
    }
    if (buttonState) {
      audio.current.pause();
      buttonStateApi(false);
    }
    if (!buttonState) {
      audio.current.play();
      buttonStateApi(true);
    }
  };
  return (
    <button
      type="button"
      onClick={() => handleAudio(audio, states)}
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
      {buttonState ? (
        <FontAwesomeIcon icon={faPause} />
      ) : (
        <FontAwesomeIcon icon={faPlay} />
      )}
    </button>
  );
};

export default Button;
