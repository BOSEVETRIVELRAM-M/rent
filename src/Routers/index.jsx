import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "./routers";
import { Layout } from "../component";
import { Home } from "../screens/home";

export function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={Router.Home} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}