# Device Sandbox Backend

## Overview

This is a **minimal Laravel backend API** for managing **devices** and **presets**.  
It provides endpoints to:

-   Fetch all devices
-   Fetch all presets
-   Create a new preset
-   Fetch a single preset

The backend is designed to serve a frontend or client application that controls devices and applies preset configurations.

---

## API Endpoints

### Test

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| GET    | `/test`  | API health check |

### Devices

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | `/devices` | Fetch all devices |

### Presets

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `/presets`      | Fetch all presets     |
| POST   | `/presets`      | Create a new preset   |
| GET    | `/presets/{id}` | Fetch a single preset |

---

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/device-sandbox-api.git
    cd device-sandbox-api
    ```

2.  Install PHP dependencies:
    ```bash
    composer install
    ```
3. Configure environment variables:
    ```bash
    APP_NAME=DeviceSandbox
    APP_ENV=production
    APP_KEY=base64:GENERATED_KEY
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=device_sandbox
    DB_USERNAME=root
    DB_PASSWORD=
    ```

4. Run database migrations
    ```bash
    php artisan migrate
    ```
5. Start the server
    ```bash
    php artisan serve
    ```

API runs at: http://127.0.0.1:8000