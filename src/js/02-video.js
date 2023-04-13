import Player from '@vimeo/player'; // API плеера находится в сущности Player
import throttle from 'lodash.throttle'; // тротлинг из лоудаша
import storage from './storage'; // local storage
// ^ здесь деструктуризация { save, load } не работает

const { save, load } = storage; // Ок, выделим память и деструктуризируем тут

const iframe = document.querySelector('iframe'); // Нашли плеер
const player = new Player(iframe); // Выделяем экземпляр сущности для API плеера
const VIDPLAYER_CURTIME = 'videoplayer-current-time'; // Константа-ключ для работы с local storage

function onTimeUpdate(event) {
  save(VIDPLAYER_CURTIME, event.seconds); // Запись в local storage
  console.log(`time updated! ${event.seconds}`);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000)); // По умолчанию раз в 250мс, но тротлинг лоудаша замедляет до 1000мс

// При перезагрузке страницы
window.onload = () => {
  const playerNewTime = load(VIDPLAYER_CURTIME);

  if (playerNewTime) {
    player.setCurrentTime(playerNewTime);
    console.log(`time loaded!`, playerNewTime);
  } else {
    console.log('There is no time in LS');
  }
};
