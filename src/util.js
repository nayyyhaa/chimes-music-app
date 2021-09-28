export const playAudio = (isPlaying, audioRef) => {
    if (isPlaying) {
      let playPromise = audioRef.current.play();
      if (playPromise) playPromise.then((audio) => audioRef.current.play());
    }
}