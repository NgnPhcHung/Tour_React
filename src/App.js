import { ThemeProvider } from 'styled-components';
import Navigation from './components/sections/Navigation';
import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Themes';
import Home from './components/pages/Home/Home.js';
import RoadMap from './components/pages/Home//RoadMap';
import DatePicker from './components/sections/DatePicker';
import HightLight from './components/pages/Home/HightLight';

import Faq from './components/pages/Home/Faq';
import ScrollToTop from './components/sections/ScrollToTop';
import CardSlider from './components/pages/Home/CardSlider';

function App() {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={light}>
                <Home />
                <DatePicker />
                <HightLight />
                <CardSlider />
                <RoadMap />
                <Faq />
                <ScrollToTop />
            </ThemeProvider>
        </>
    );
}

export default App;
