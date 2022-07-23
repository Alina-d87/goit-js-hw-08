import Player from '@vimeo/player';

import { throttle } from 'Lodash';

const ref = document.querySelector('#vimeo-player');
console.log(ref);

//const player = new Vimeo.Player(ref);

//player.on('timeupdate', function (time) {
//  const timeSecond = JSON.parse(time.seconds);

//  console.log(timeSecond);
//  try {
//    //const listTime = timeLocal ? timeSecond : [];
//    //listTime.push(value);
//    //const newTime = JSON.stringify(listTime);
//    localStorage.setItem('videoplayer-current-time', timeSecond);
//  } catch (error) {
//    console.log('parsing ERROR!');
//  }
//  //player.setCurrentTime(time.seconds).then(player.on);
//});

//player
//  .setCurrentTime()
//  .then(function (seconds) {
//    const timeLocal = localStorage.getItem(seconds);
//    console.log('hello');
//    // seconds = the actual time that the player seeked to
//  })
//  .catch(function (error) {
//    switch (error.name) {
//      case 'RangeError':
//        console.log('error');
//        // the time was less than 0 or greater than the video’s duration
//        break;

//      default: // some other error occurred
//        console.log('hi error');
//        break;
//    }
//  });
