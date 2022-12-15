# OLX-clone

### Live: [https://olx-clone-5cb8a.web.app](https://olx-clone-5cb8a.web.app)

<!-- ## Features -->

## Setup & Installation

1. Clone down this repository and go inside the folder. You will need `node` and `npm` installed globally on your machine.  

2. Create a `.env.local` file in root directory. This file holds sensitive settings, which should not be pushed to github. *But I'm leaving it for testing purpose*:
    ```shell
    VITE_APP_API_URL=https://olx-server.vercel.app
    VITE_APP_apiKey=AIzaSyC3R5u8g6fEmVv2mR6_awn-rXgd63wPVJY
    VITE_APP_authDomain=olx-clone-5cb8a.firebaseapp.com
    VITE_APP_projectId=olx-clone-5cb8a
    VITE_APP_storageBucket=olx-clone-5cb8a.appspot.com
    VITE_APP_messagingSenderId=414231183839
    VITE_APP_appId=1:414231183839:web:f60905807b01f6d084c46a
    VITE_APP_IMGBB_API_KEY=8d155210d9e1923baca8b95c1565017d
    ```

3. Installation:

    `npm install`

    To Start Server:

    `npm run dev`  

    To Visit App:

    `localhost:5173`

## Server Side (Optional)

If you also want to see the server side code you can visit the `server` branch

<img src="./src/assets/readme/server-branch.PNG" alt="Markdown Monster icon" style="width:250px; float: left; margin-right: 10px; border: 2px solid white" />