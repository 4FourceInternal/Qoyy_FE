@echo off
echo Starting Qoyy Global Development Environment...
echo.

echo Starting Strapi Backend...
start "Strapi Backend" cmd /k "cd ../backend-strapi && npm run develop"

echo Waiting for backend to start...
timeout /t 10 /nobreak >nul

echo Starting Frontend...
start "Frontend" cmd /k "npm run dev"

echo.
echo Development servers are starting...
echo - Frontend: http://localhost:5173
echo - Strapi Admin: http://localhost:1337/admin
echo - Strapi API: http://localhost:1337/api
echo.
echo Press any key to close this window...
pause >nul
