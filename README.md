# Setup and website link:

Author: Nawsheen Mehereen </br>
Email: nawsheen141@gmail.com </br>
Github: https://github.com/curryfizz </br>

## Live Website Link:

Link: https://device-sandbox-production.up.railway.app/

## Device Sandbox Frontend

This is the frontend for **Device Sandbox**, powered by React, Redux, and Tailwind CSS.

### Prerequisites

- Node.js >= 18
- npm or yarn
- Backend API running (see `VITE_API_BASE_URL`) - **please run device-sandbox-api first**

### Setup

1. Clone the repository 
    ```bash
    git clone https://github.com/curryfizz/device-sandbox.git
    cd device-sandbox
    ```
2. Install dependencies
    ```bash
    npm install
    # or
    yarn install
    ```
3. Configure environment variables

   Create a ``.env`` file in the root: 
   ```env
   VITE_API_BASE_URL=VITE_API_BASE_URL=http://127.0.0.1:8000/api
   ```
    Replace with your backend URL if different.
4. Start the development server
    ```bash
    npm run dev
    # or
    yarn dev
    ```
Open http://localhost:5173 in your browser.


### Folder Structure
```
src/
├─ components/      # UI components (Canvas, Devices, Buttons, Modals, Toast, etc.)
├─ configs/         # Device mappings, constants
├─ store/           # Redux slices and store
├─ services/        # API calls
├─ App.jsx          # Calls <MainLayout />
└─ main.jsx         # Main app entry
```
### Additional
- Canvas items automatically scales devices based on window.devicePixelRatio.

## Device Sandbox Backend

### Overview

This is a **minimal Laravel backend API** for managing **devices** and **presets**.  
It provides endpoints to:
- Creat a device
-   Fetch all devices
-   Fetch all presets
-   Create a new preset
-   Fetch a single preset


---

### API Endpoints

#### Test

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| GET    | `/test`  | API health check |

#### Devices

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | `api/devices` | Fetch all devices |
| POST    | `api/devices` | Create a devices |

#### Presets

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `api/presets`      | Fetch all presets     |
| POST   | `api/presets`      | Create a new preset   |
| GET    | `api/presets/{id}` | Fetch a single preset |

---

### Preqrequisites
- PHP >= 8.1
- Composer (https://getcomposer.org/)
- MySQL >= 8 (or MariaDB)
- PHP extensions: ``openssl``, ``pdo``, ``mbstring``, ``tokenizer``, ``xml``, ``ctype``, ``json``, ``bcmath``, ``fileinfo``
- Web server: Apache, Nginx, or php artisan serve


### Installation

1.  Clone the repository :

    ```bash
    git clone https://github.com/curryfizz/device-sandbox.git
    cd device-sandbox
    ```
2. Switch to the ``backend`` branch:
    ```git
    git checkout backend
    ```

3.  Install PHP dependencies:
    ```bash
    composer install
    ```
4. Configure the database:

    Create a MySQL database and user:
    ```sql
    CREATE DATABASE device_sandbox;
    CREATE USER 'root'@'localhost' IDENTIFIED BY 'root';
    GRANT ALL PRIVILEGES ON device_sandbox.* TO 'root'@'localhost';
    FLUSH PRIVILEGES;
    ```
5. Create a .env file in the backend root:
    ```bash
    APP_NAME=DeviceSandbox
    APP_ENV=local
    APP_KEY=base64:GENERATED_KEY   # Generate via php artisan key:generate
    APP_DEBUG=true
    APP_URL=http://127.0.0.1:8000

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=device_sandbox
    DB_USERNAME=root
    DB_PASSWORD=root
    ```
    Generate the application key:
    ```bash
    php artisan key:generate
    ```
6. Run database migrations
    ```bash
    php artisan migrate
    ```
7. Start the server
    ```bash
    php artisan serve
    ```

The API will now run at http://127.0.0.1:8000

### Notes:
- The frontend will work without the backend, but saving presets requires API access.
- Ensure the .env file for the frontend points to the backend API (``VITE_API_BASE_URL``).