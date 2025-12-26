import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
const MainLayout = () => {
return (
    <>
        <Header />
        <main id="main-container">
            <Outlet />
        </main>
        <Footer />
        
    </> 
);
};

export default MainLayout;