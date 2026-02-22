# УРРУ Планировщик

Планировщик задач для начальника участка УРРУ. Firebase (аутентификация + Firestore база данных) + Render (хостинг).

---

## Структура проекта

```
urru-project/
├── public/
│   └── index.html      ← Весь сайт (HTML + CSS + JS)
├── firebase_rules       ← Правила безопасности Firestore
├── render.yaml          ← Конфиг для Render (авто-деплой)
├── .gitignore
└── README.md
```

---

## Деплой: GitHub + Render (пошагово)

### ШАГ 1. Создай репозиторий на GitHub

1. Зайди на **https://github.com** (залогинься или зарегистрируйся)
2. Нажми зелёную кнопку **"New"** (или **+** → **New repository**)
3. Заполни:
   - **Repository name:** `urru-planner` (или как хочешь)
   - **Visibility:** Private (приватный — никто не увидит)
   - **НЕ ставь** галочки на README, .gitignore, license (мы свои загрузим)
4. Нажми **Create repository**

### ШАГ 2. Загрузи файлы в GitHub

**Вариант А — через браузер (проще):**

1. На странице нового пустого репозитория нажми **"uploading an existing file"**
2. Перетащи ВСЕ файлы и папки из скачанного архива:
   - папку `public` (с `index.html` внутри)
   - файл `render.yaml`
   - файл `.gitignore`
   - файл `firebase_rules`
   - файл `README.md`
3. Внизу нажми **"Commit changes"**

**Вариант Б — через командную строку (для продвинутых):**

```bash
cd путь/к/папке/urru-project
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ТВОЙ-ЛОГИН/urru-planner.git
git push -u origin main
```

### ШАГ 3. Подключи Render

1. Зайди на **https://render.com** и залогинься через GitHub
2. Нажми **"New +"** → **"Static Site"**
3. Нажми **"Connect a repository"** → выбери **urru-planner**
4. Заполни настройки:
   - **Name:** `urru-planner` (или любое)
   - **Branch:** `main`
   - **Build Command:** оставь пустым (или `echo "no build"`)
   - **Publish Directory:** `public`
5. Нажми **"Create Static Site"**
6. Подожди 1-2 минуты — сайт будет доступен по адресу типа:
   **https://urru-planner.onrender.com**

### ШАГ 4. Добавь домен Render в Firebase

**Это важно!** Без этого авторизация не будет работать.

1. Открой **https://console.firebase.google.com** → проект **support-urru**
2. В левом меню → **Authentication** → **Settings** (Настройки)
3. Вкладка **Authorized domains** (Авторизованные домены)
4. Нажми **Add domain** и добавь свой URL с Render (например `urru-planner.onrender.com`)
5. Сохрани

### ШАГ 5. Готово!

Теперь при каждом пуше в GitHub → Render автоматически обновит сайт.

---

## Firebase (уже настроен)

- **Проект:** support-urru
- **Auth:** Email/Password
- **База:** Firestore
- **Правила:** см. файл `firebase_rules`

Если нужно поменять правила → Firebase Console → Firestore → Rules → вставь содержимое `firebase_rules` → Publish.

---

## Как обновить сайт

1. Отредактируй `public/index.html`
2. Залей в GitHub (через браузер или `git push`)
3. Render подхватит автоматически за 1-2 минуты

---

## FAQ

**В: Render бесплатный?**
О: Да, Static Site на Render — бесплатно. Firebase Spark — тоже бесплатно (до 50K пользователей).

**В: Сайт "засыпает" на Render?**
О: Статические сайты не засыпают (это не сервер). Всегда доступен.

**В: Как привязать свой домен?**
О: Render Dashboard → твой сайт → Settings → Custom Domains → добавь домен.
