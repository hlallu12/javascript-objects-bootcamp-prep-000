var playlist = {
  Beyonce: "Till the end of the time"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

