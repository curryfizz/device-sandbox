# Device Sandbox Frontend

This is the frontend for **Device Sandbox**, powered by React, Redux, and Tailwind CSS.


## Prerequisites

- Node.js >= 18
- npm or yarn
- Backend API running (see `VITE_API_BASE_URL`) - **please run device-sandbox-api first**


## Setup

1. Clone the repository (unzip the files in this case)
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
   VITE_API_BASE_URL=http://localhost:8000/api
   ```
    Replace with your backend URL if different.
4. Start the development server
    ```bash
    npm run dev
    # or
    yarn dev
    ```
Open http://localhost:5173 in your browser.


## Folder Structure
```
src/
├─ components/      # UI components (Canvas, Devices, Buttons, Modals, Toast, etc.)
├─ configs/         # Device mappings, constants
├─ store/           # Redux slices and store
├─ services/        # API calls
├─ App.jsx          # Calls <MainLayout />
└─ main.jsx         # Main app entry
```
## Additional
- Canvas items automatically scales devices based on window.devicePixelRatio.
