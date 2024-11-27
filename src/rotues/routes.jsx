import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import About from "../Pages/About/About";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            // {
            //     path: `/`,
            //     element: <App></App>,
            // },
            {
                path: `about`,
                element: <About></About>
            },
        ]
    },
]);

export default routes;