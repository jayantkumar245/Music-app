import { useState, useEffect } from "react";
import Player from "./Components/Player";

export default function App() {
  const [songs] = useState([
    {
      title: "Toofan-KGF_Chapter_2",
      artist: "Sandesh Datta Naik",
      img_src: "./images/Toofan-KGF_Chapter_2.jpg",
      src: "./music/Toofan-KGF_Chapter_2.mp3"
    },
    {
      title: "forget me too Ft.stanley",
      artist: "machine gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Heaven fall by willy",
      artist: "willy & Ghost",
      img_src: "./images/song-3.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Remember me in Times",
      artist: "Selena Gomez",
      img_src: "./images/song-4.jpg",
      src: "./music/on-n-on.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
      {/* song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} */}
    </div>
  );
}
