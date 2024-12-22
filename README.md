# Развернутая версия тут:
https://arnurarykbaev.github.io/stickers-table-main/

# Vue 3 + TypeScript + Vite Project

## Описание  
Доска со стикерами на странице Board. Редактирование - на странице settings, либо двойным кликом по карточке. Проект представляет собой одностраничное приложение, созданное с использованием Vue 3, TypeScript и Vite. Он включает поддержку `<script setup>` для удобной работы с компонентами и предоставляет готовую структуру для быстрого старта разработки.

## Технологии  
- **Vue 3**: Фреймворк для создания пользовательских интерфейсов.  
- **TypeScript**: Инструмент для статической типизации JavaScript.  
- **Vite**: Быстрый инструмент для сборки и запуска проектов.  

## Установка и запуск  

### Предварительные требования  
- Node.js (14.x или выше)  
- npm  

### Установка зависимостей  
```bash
npm install


### Структура проекта

```bash
.
├── public/            # Публичные файлы
├── src/               # Исходный код проекта
│   ├── assets/        # Медиа-файлы
│   ├── components/    # Компоненты Vue
│   ├── helpers/       # Правила валидации, регулярные выражения
│   ├── plugins/       # Плагины и библиотеки
│   ├── services/      # Запросы на сервер
│   ├── stores/        # Управление состоянием (Pinia)
│   ├── pages/         # Страницы приложения
│   ├── styles/        # Стили приложения
│   ├── App.vue        # Главный компонент приложения
│   ├── main.ts        # Точка входа приложения
├── .gitignore         # Файлы и папки, игнорируемые Git
├── package.json       # Описание проекта и зависимости
└── README.md          # Описание проекта (этот файл)
```

### Используемые подходы
## Компонентный подход
Приложение построено с использованием компонентного подхода, что позволяет легко масштабировать и поддерживать проект. Каждый компонент отвечает за свою небольшую часть функциональности и может быть переиспользован в различных частях приложения.

## Управление состоянием
Для управления состоянием используется Pinia. Это позволяет централизовать управление состоянием и делать его доступным для всех компонентов приложения.

## Валидация форм
Для валидации форм используется Vuelidate. Это позволяет легко добавлять правила валидации и управлять состоянием ошибок в формах.

## Маскировка ввода
Для маскировки ввода используется V-Maska, что позволяет применять маски к полям ввода и контролировать формат вводимых данных.

## Типизация
Проект использует TypeScript для добавления типизации, что помогает предотвратить ошибки и улучшает автодополнение в IDE.

## Стилизация
Для стилизации используется SCSS, что позволяет использовать переменные, вложенность и другие возможности, упрощающие создание и поддержку стилей.

## Заключение

Этот проект представляет собой приложение для управления контактами. Оно позволяет сохранять новые контакты, включая имя, номер телефона и электронную почту. Пользователи могут создавать новые записи, редактировать существующие и искать контакты в базе данных. 
