import React from "react";
import  {Routes,Route} from "react-router-dom";
import Main from "../Components/dashboard/Dashboard";
import Cart from "../Components/Cart/app";
const routes = [
    { path: "/", name: "main", Component: Main  },
    { path: "/Cart", name: "cart", Component: Cart},
];

const Pages:React.FC = () => {
    return(
        <>
            {routes.map(({path,Component})=>(
                <Routes  key={path}>
                    <Route   path={path} element={<Component/>}/>
                </Routes>
            ))}
        </>
    )
}

export default  Pages;