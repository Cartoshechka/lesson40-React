# React + TypeScript + Vite
# React Forms & API - Controlled vs Uncontrolled

## Описание
Учебный проект для изучения концепций контролируемых (Controlled) и неконтролируемых (Uncontrolled) компонентов в React. Приложение демонстрирует разные подходы к работе с формами и выполняет асинхронные запросы к API для загрузки данных пользователей.

## Компоненты

### Контролируемые компоненты (Controlled)
- **ControlledForm.tsx** - форма с полями Email и Password. Использует хук `useState` для управления значениями полей в реальном времени. React контролирует состояние каждого input через `value` и `onChange`. Отображает текущие значения полей под формой.

### Неконтролируемые компоненты (Uncontrolled)
- **UncontrolledForm.tsx** - форма с полями Name и Message. Использует хук `useRef` для доступа к значениям полей только при отправке формы. DOM сам управляет значениями input. Значения извлекаются через `ref.current.value` при submit.

### Компоненты с API
- **UsersList.tsx** - компонент для загрузки и отображения списка пользователей с сервера JSONPlaceholder. Использует хук `useEffect` для выполнения запроса при монтировании компонента. Обрабатывает три состояния: загрузка (loading), успешная загрузка (success) и ошибка (error).

## Технологии
- React 18
- TypeScript
- Vite
- CSS3
- JSONPlaceholder API (https://jsonplaceholder.typicode.com)

## Установка и запуск
```bash