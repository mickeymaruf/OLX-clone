# OLX-clone

### Live: [https://olx-clone-5cb8a.web.app](https://olx-clone-5cb8a.web.app)


Testing email: maruf.h4x@gmail.com <br />
Testing password: 123123

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

<img src="./src/assets/readme/server-branch.PNG" alt="Markdown Monster icon" style="width:250px" />

<br />

## About the app
**Technologies:** React (vite), Node.js, Express.js, MongoDB (with atlas hosting), Firebase(auth, hosting)

**Server** is hosted on Vercel.

## Features

 - Implemented user registration & login 
 - User can list an item for sale.
 - Added (unsold) items will be listed on the home page.
 - If users click on their profile icon, they will see 2 nav links. One **My Adds** and another **My Purchase**. On My Adds page Users can see their own products listed for sale and their purchases on My Purchase page.
 - **(EXTRA)** Users can cancel their orders by simply clicking the cancel order button below the product title.
 - Implemented search functionality for searching products by title
 - Fully responsive