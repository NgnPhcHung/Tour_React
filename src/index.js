import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../node_modules/normalize.css/normalize.css';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/Themes';
import Navigation from './components/sections/Navigation';
import Footer from './components/sections/Footer/Footer';
import Profile from './components/pages/User/Profile';
import Find from './components/pages/Find/Find';
import TourInfo from './components/pages/TourInfo/TourInfo';
import PaymentSuccess from './components/pages/TourInfo/PaymentSuccess';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <ThemeProvider theme={light}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='profileUser' element={<Profile />} />
                    <Route path='findResult' element={<Find />} />
                    <Route
                        path='tour/tourInfo/:tourID'
                        element={<TourInfo />}
                    />
                    <Route path='paysuccess' element={<PaymentSuccess />} />
                    {/* <Route path='users/admin/home' element={<Home />} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
