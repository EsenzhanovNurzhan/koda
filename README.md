# Koda Study

Platform for preparing for Kazakhstan's Unified National Testing (UNT), with a
Next.js frontend and a Django REST backend.

## Project structure

- `frontend/` — Next.js application (Node.js and npm).
- `backend/` — Django REST API (Python).

## Run locally

Start the backend from `backend/`:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Start the frontend from `frontend/` in a separate terminal:

```powershell
npm ci
npm run dev
```

Local virtual environments, dependencies, environment files, and SQLite
databases are excluded from version control.