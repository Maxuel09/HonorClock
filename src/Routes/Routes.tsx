import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Relojes from "../Pages/Relojes";
import Rebajas from "../Pages/Rebajas";
import Root from "../Routes/Root";
import SignIn from "../Pages/SignIn";
import Categories from "../Pages/Categories";
import User from "../Pages/User";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root /> ,
        
        children: [
            {
                path: "/HC/Home",
                element: <Home />
            },
            {
                path: "/HC/Relojes",
                element: <Relojes />
            },
            {
                path: "/HC/Categorias",
                element: <Categories />
            },
            {
                path: "/HC/Rebajas",
                element: <Rebajas />
            },
            {
                path: "/HC/SignIn",
                element: <SignIn />
            },
            {
                path: "/HC/User",
                element: <User />
            },
        ]
    },
        
]);

export default router