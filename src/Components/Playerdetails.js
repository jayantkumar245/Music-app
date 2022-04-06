export default function Playerdetails(props) {
  return (
    <div className="song-player-details">
      <div className="details-img">
        <img src={props.song.img_src} alt="" />
      </div>
      <h3 className="details-title">{props.song.title}</h3>
      <h4 className="details-artist">{props.song.artist}</h4>
    </div>
  );
}
