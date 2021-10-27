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

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const songs = [
  {
    url: "https://backoffice.berghauscie.de/documents/5/180s_Pitch_Final.mp3",
    cover: "path/to/jpeg",
    artist: {
      name: "B & C",
      song: "18 Sekunden blabla",
    },
  },
];

class MediaContent extends React.Component {
  //i.e., this.props.mediaUrl is the one encountering such issue
  constructor(props) {
    super(props);
    this.player = React.createRef();
    this.state = {
      audioBlobURL: "",
      isAudioBlobCreated: false,
    };
  }

  async componentDidMount() {
    let blob = await fetch(this.props.mediaUrl).then((r) => r.blob());
    this.setState({ audioBlobURL: URL.createObjectURL(blob) }, () =>
      this.setState({ isAudioBlobCreated: true })
    );
  }

  render() {
    return !!this.props.mediaUrl && this.state.isAudioBlobCreated ? (
      <AudioPlayer
      //layout={"horizontal-reverse"}
      showJumpControls={true}
      //customAdditionalControls={[]}
        src={this.state.audioBlobURL}
        ref={this.player}
      ></AudioPlayer>
    ) : (
      <> </>
    );
  }
}

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
  // const [playing, toggle] = useAudio(
  //   "https://backoffice.berghauscie.de/documents/5/180s_Pitch_Final.mp3"
  // );

  return (
    <div>
      {/* {
        <span onClick={toggle}>
          {playing ? (
            <VolumeMute width={"40px"} height={"40px"} strokewidth={3} />
          ) : (
              <div className={"animated headShake infinite slow"}>
            <Sound width={"40px"} height={"40px"} strokewidth={3} />
            </div>
          )}
        </span>
      } */}
      <div className={""} style={{ fontSize: "18px", }}>
        <br />
        "Weininvestments bei Berghaus & Cie"
        <br />
        in 180 Sekunden
   

      <MediaContent
        mediaUrl={
          "https://backoffice.berghauscie.de/documents/5/180s_Pitch_Final.mp3"
        }
      />
         </div>

      {/* <AudioPlayer
    autoPlay
    showJumpControls={false}
    customAdditionalControls={[]}
    src="https://backoffice.berghauscie.de/documents/5/180s_Pitch_Final.mp3"
    //onPlay={e => console.log("onPlay")}
    // other props here
  /> */}
    </div>
  );
};

export default PlayAudio;
