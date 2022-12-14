import React, { useEffect, useState } from 'react';

function useAudio(urls, url) {

  const audioRef = React.useRef(null);
  // const randIdx = Math.floor(Math.random() * urls.length);

  const [urlState, setUrlState] = useState(url);

  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [playbackStatus, setPlaybackStatus] = React.useState("pause");
  const [isLoading, setLoading] = React.useState(true);
  const [isSeeking, setSeeking] = React.useState(false);

  function playNext() {

    const random = Math.floor(Math.random() * urls.length);
    setUrlState(urls[random]);
    setPlaybackStatus("play");

    // audioRef

  }


  // if (playbackStatus == "play" && audioRef.current.playbackStatus == "pause") {
  //   audioRef.current.play();
  // }

  return [
    <audio
      autoPlay
      onLoadedData={() => {
        // setPlaybackStatus("play");
        // audioRef.current.play();
        setLoading(false);
        // setDuration(audioRef.current.duration);
      }}
      // onSeeking={() => setSeeking(true)}
      // onSeeked={() => setSeeking(false)}

      onEnded={() => playNext()}
      src={urlState}
      ref={audioRef}
      // onTimeUpdate={() => {
      //   setCurrentTime(audioRef.current.currentTime);
      // }}
      hidden
    />,
    {
      // currentTime,
      duration,
      playbackStatus,
      isSeeking,
      isLoading,
      // progress: (currentTime / duration) * 100,
      setTime: seconds => {
        audioRef.current.currentTime = seconds;
      },
      togglePlaybackStatus: () => {
        if (playbackStatus === "play") {
          audioRef.current.pause();
          setPlaybackStatus("pause");
        }
        if (playbackStatus === "pause") {
          audioRef.current.play();
          setPlaybackStatus("play");
        }
      }
    }
  ];
}

export default useAudio;
