var playlist = {
  Beyonce: "Till the end of the time"
};


function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}
