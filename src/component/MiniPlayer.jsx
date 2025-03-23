import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import classes from "../Styles/MiniPlayers.module.css";
export default function MiniPlayer({ title, id }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videourl = `https://www.youtube.com/watch?v=${id}`;
  function toggleminiPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleminiPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleminiPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer url={videourl} />
      <p>{title}</p>
    </div>
  );
}
