import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Main;