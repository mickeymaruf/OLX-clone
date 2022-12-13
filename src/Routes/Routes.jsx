import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import MyAdds from "../Pages/Dashboard/MyAdds";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/Products/AddProduct";
import RequireAuth from "./RequireAuth";

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
                element: <RequireAuth><AddProduct /></RequireAuth>,
            },
            {
                path: '/myadds',
                element: <RequireAuth><MyAdds /></RequireAuth>,
            },
        ]
    }
])

export default router;