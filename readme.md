# 🎨 Max Halimov - 3D Portfolio Website

Интерактивное 3D портфолио на Three.js с React интерфейсом и интеграцией мессенджеров для связи.

## ✨ Особенности:

- 🎮 **3D интерактивная сцена** на Three.js
- 📱 **Современный UI** на React + TypeScript  
- 💬 **Интеграция мессенджеров** (Telegram, WhatsApp, Email, LinkedIn)
- 🎵 **3D пространственный звук**
- 📱 **Адаптивный дизайн**
- 🚀 **Готов к деплою** на GitHub Pages

## 🚀 Быстрый старт:

### Разработка:
```bash
# Клонируйте репозиторий
git clone https://github.com/ВАШ_USERNAME/portfolio-website.git

# Установите зависимости
npm install

# Запустите dev сервер
npm run dev
```

### Production сборка:
```bash
# Соберите проект
npm run build

# Предварительный просмотр
npm run preview
```

## 📱 Настройка мессенджеров:

1. Откройте `src/Application/UI/components/ContactMessengers.tsx`
2. Замените ссылки на ваши профили:
   - Telegram: `https://t.me/ВАШ_USERNAME`
   - WhatsApp: `https://wa.me/ВАШ_НОМЕР`
   - Email: `mailto:ВАШ_EMAIL`
   - LinkedIn: `https://linkedin.com/in/ВАШ_USERNAME`

## 🌐 Публикация на GitHub Pages:

Подробная инструкция в файле [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

1. Настройте ссылки в `ContactMessengers.tsx`
2. Обновите пути в конфигурации
3. Включите GitHub Pages в настройках репозитория
4. Пушьте изменения - автодеплой настроен!

## 🛠 Технологии:

- **Frontend**: Three.js, React, TypeScript, GSAP
- **Bundler**: Webpack 5
- **Стили**: CSS-in-JS
- **Deploy**: GitHub Actions + GitHub Pages

## 📦 Структура проекта:

```
src/
├── Application/           # Главный класс приложения
│   ├── World/            # 3D сцена и объекты
│   ├── UI/               # React интерфейс
│   │   └── components/   # UI компоненты
│   ├── Audio/            # Аудио система
│   └── Utils/            # Утилиты
static/                   # Статические файлы
├── models/               # 3D модели
├── textures/             # Текстуры
└── audio/                # Звуки
```

## 🎮 Управление:

- **Мышь**: Вращение камеры
- **Клик**: Интерактивные элементы
- **Scroll**: Зум камеры

## 📝 Лицензия:

MIT License
