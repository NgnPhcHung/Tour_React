import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../node_modules/normalize.css/normalize.css';
import User from './components/pages/User/UserTab/User';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light } from './styles/Themes';
import Navigation from './components/sections/Navigation';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <ThemeProvider theme={light}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='profileUser' element={<User />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
