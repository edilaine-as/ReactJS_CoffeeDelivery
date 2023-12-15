import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/order" element={<Order/>} />
                <Route path="/order-sucess" element={<Order/>} />
            </Route>
        </Routes>
    )
}