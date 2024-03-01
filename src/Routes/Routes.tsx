import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Relojes from "../Pages/Relojes";
import Rebajas from "../Pages/Rebajas";
import Root from "../Routes/Root";
import SignIn from "../Pages/SignIn";
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
                path: "/HC/Rebajas",
                element: <Rebajas />
            },
            {
                path: "/HC/SignIn",
                element: <SignIn />
            }
        ]

    },
]);

export default router