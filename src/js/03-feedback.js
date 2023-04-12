import throttle from 'lodash.throttle';
import storage from './storage';

const { save, load } = storage; // Модуль для работы с local storage
const FORMSTATE_KEY = 'feedback-form-state'; // Ключ для local storage

const formEl = document.querySelector('form');
const emailEl = document.querySelector('[name=email]');
const textAreaEl = document.querySelector('[name=message]');

function onInput() {
  save(FORMSTATE_KEY, { email: emailEl.value, message: textAreaEl.value });
  // Это мы запоминаем
}

function onSubmit(event) {
  event.preventDefault(); // Отменяем действие по умолчанию

  console.log({ email: emailEl.value, message: textAreaEl.value }); // Объект в консоль

  // Очищаем поля формы
  emailEl.value = '';
  textAreaEl.value = '';

  save(FORMSTATE_KEY, { email: emailEl.value, message: textAreaEl.value });
  // Это мы забываем
}

window.onload = () => {
  const { email, message } = load(FORMSTATE_KEY); // Загружаем из хранилища
  if (email) {
    emailEl.value = email; // Почту
  }
  if (message) {
    textAreaEl.value = message; // Текст сообщения
  }
};

formEl.addEventListener('keydown', throttle(onInput, 500)); // Не чаще раза в 500мс
formEl.addEventListener('submit', onSubmit);
