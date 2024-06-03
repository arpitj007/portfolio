import React from "react";

function SpotifyPlaylist() {
  return (
    <div className="spotify-playlist">
      <iframe
        title="spotify-playlist"
        src="https://open.spotify.com/embed/playlist/73VYpydfhTGiw8g4X8DIMo?utm_source=generator&theme=0"
        width="100%"
        height="352"
        className="spotify-iframe"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default SpotifyPlaylist;
