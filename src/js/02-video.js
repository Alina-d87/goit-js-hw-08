//import Player from '@vimeo/player';

const refVideo = document.querySelector('#vimeo-player');
console.log(refVideo);

const player = new Vimeo.Player(refVideo);
console.log(player);

const onPlayer = player.on('timeupdate', function (time) {
  const timeSecond = time.seconds;
  console.log(timeSecond);
  localStorage.setItem('videoplayer-current-time', timeSecond);
  //  console.log(localStorage.getItem(timeSecond));
});

player
  .setCurrentTime(onPlayer)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
