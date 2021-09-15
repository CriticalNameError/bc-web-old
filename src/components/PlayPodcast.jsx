// import React, { Component, useState } from "react";

// const PlayAudio = () => {
//   const [podcastIsPlaying, setPodcastIsPlaying] = useState(false);
//   const toggleAudio = () => {
//     if (!podcastIsPlaying) {
//       const audioEl = document.getElementsByClassName("audio-element")[0];
//       audioEl.play();
//       setPodcastIsPlaying(true);
//     } else {
//       const audioEl = document.getElementsByClassName("audio-element")[0];
//       audioEl.pause();
//       setPodcastIsPlaying(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={toggleAudio}>
//         <span>{!podcastIsPlaying ? "Play Audio" : "Stop audio"}</span>
//       </button>
//       <audio className="audio-element">
//         <source src="https://backoffice.berghauscie.de/documents/5/180s_Pitch_Final.mp3"></source>
//       </audio>
//     </div>
//   );
// };

// export default PlayAudio;

import Sound from "../icons/sound";
import VolumeMute from "../icons/volume-mute";

import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const PlayAudio = ({ url }) => {
  const [playing, toggle] = useAudio(
    "https://backoffice.berghauscie.de/documents/5/180s_Pitch_Final.mp3"
  );

  return (
    <div className={"text-primary "} style={{cursor: "pointer"}}>
      {
        <span onClick={toggle}>
          {playing ? (
            <VolumeMute width={"40px"} height={"40px"} strokewidth={3} />
          ) : (
              <div className={"animated headShake infinite slow"}>
            <Sound width={"40px"} height={"40px"} strokewidth={3} />
            </div>
          )}
        </span>
      }
    </div>
  );
};

export default PlayAudio;
