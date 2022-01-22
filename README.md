<h1 align="center">
    <img alt="Pomodoro" src="./public/readme-header.jpg">
</h1>
<p align="center">
    <img alt="Version" src="https://img.shields.io/github/package-json/v/Comediant24/pomodoro-react" />
    <img alt="Made by: Comediant24" src="https://img.shields.io/badge/made%20by-Comediant24-blue" />
</p>

# Pomodoro React

Ссылка на проект в gh-pages: **[Pomodoro React GH pages](https://comediant24.github.io/pomodoro-react/)**

## ✍🏻 Краткое описание проекта

Для управления приложением используется свойство объекта ref `current`, которое принимает null при паузе и значение при старте счетчика. Конфиг кнопок управления прописан в отдельном файле. Изменение переменной состояния оставшегося времени проиходит функцией `setInterval`. Для управления стилями используется `styled components 💅🏻`. Для него описан глобальный стиль. Интерфейс адаптивен до `320px`. На девайсах по окончанию счетчика происходит вибрация - для этого задействован `Navigator API`. Во время работы счетчика происходит смена цвета бекграунда - это работа `css` свойства `clip-path` значение которого привязано к переменным состояния.

## 🌿 Обновления
0.5.0 - стартовая версия

0.6.0 - добавлен свервис воркер для pwa

## 📖 Задачи

Изучить работу `ref` не только для `input`, изуть свойство `clip-path`, узнать о `Navigator API` и его методах, познакомиться с работай `setInterval`.

## 📹 Демонстрация работы интерфейса

![Адаптивность](./public/1_1.gif)

#

## 📹 Демонстрация работы `clip-path`

![Адаптивность](./public/2_1.gif)

#

## 🧰 Инструменты

- HTML, CSS
- Javascript
- React, React hooks
- Navigator API

## 🆕 Будущие обновления

- [ ] Переписать код с использованием Redux ?
- [ ] Переписать код на TypeScript ?
- [ ] Хранить пользовательские настройки в localStorage

## 💻 Установка зависимостей

##### `npm install` – установить зависимости проекта

##### `npm start` – запуск devServer на http://localhost:3000/

##### `npm build` – production сборка проекта
