import { Outlet } from "react-router";

const Root = () => {
    return (
        <div>
            Root
            <Outlet></Outlet>
        </div>
    );
};

export default Root;