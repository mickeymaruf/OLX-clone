import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Products/AddProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/add-product',
                element: <AddProduct />,
            },

        ]
    }
])

export default router;