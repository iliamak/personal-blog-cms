# Личный блог с простой CMS

Этот проект представляет собой личный блог с удобной системой управления контентом (CMS) для непродвинутых пользователей. Интерфейс разработан таким образом, чтобы пользователь мог легко добавлять и редактировать информацию о себе, проектах, опыте работы и статьях блога без необходимости работы с кодом.

## Функциональность

- **Публичный вид**: профиль с фото, описание, проекты, опыт работы, статьи блога
- **Админ-панель**: доступ по нажатию на кнопку "+" в правом верхнем углу
- **Управление контентом**: добавление/редактирование/удаление проектов, статей и т.д.
- **Простая загрузка файлов**: фотографий, изображений проектов, обложек статей

## Технологии

- React
- Tailwind CSS

## Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/iliamak/personal-blog-cms.git
cd personal-blog-cms

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start
```

## Использование

1. После запуска проекта откройте http://localhost:3000 в браузере
2. Нажмите на кнопку "+" в правом верхнем углу для доступа к панели администратора
3. Внесите необходимые изменения в контент
4. Нажмите "Сохранить" для применения изменений
5. Переключитесь в режим предпросмотра для оценки результата

## Развитие проекта

В будущих версиях планируется добавить:
- Сохранение данных в базу данных или JSON-файлы
- Аутентификацию для доступа к админ-панели
- Продвинутый редактор текста для статей
- Возможность изменения цветовой схемы и темы оформления
