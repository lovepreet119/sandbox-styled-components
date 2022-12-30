import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Components/Common/GlobalStyle/GlobalStyle';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Components/Common/MainLayout/MainLayout';
import Homepage from './Components/Pages/Homepage/Homepage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';


const GlobalTheme = {
  light: {
    theme: 'light',
    gradient1: 'linear-gradient(120deg,#f857a6 10%,#ef3f6e 100%);',
    background_gradient: 'linear-gradient(90.05deg, #E7EEFD 0.04%, #FBD7F4 99.95%)',
    white: 'white',
    titleColor: '#343f52',
    textColor: 'rgb(96, 106, 123)',
    blueBg: '#e2e2f3',
    cardBorderColor: '#CFCEE8',
    linkColor: '#aab0bc',
    hoverColor: '#605dba',
    themeWhite: '#fff',
    black: "#000",
    backdropColor: ' rgba(30,34,40,0.7)',
    bodyBg: 'rgb(254, 254, 254)',
    shadow: '0 0 1.25rem rgb(30 34 40 / 6%)',
    themeImg: 'invert(0)',
    borderColor: '#b0aedd',
    borderColorLight: 'rgba(8,60,130,.07)',
    labelColor: '#959ca9',
  },

  dark: {
    theme: 'dark',
    gradient1: 'linear-gradient(120deg,#f857a6 10%,#ef3f6e 100%);',
    background_gradient: 'linear-gradient(90.05deg, #4B2F46 0.04%, #500E43 99.95%)',
    white: 'white',
    titleColor: '#eee',
    blueBg: '#e2e2f3',
    textColor: '#9bacc4',
    bodyBg: '#1e2228',
    shadow: '0 0 1.25rem rgb(118 124 133 / 7%)',
    themeImg: 'invert(0.8)',
    backdropColor: ' rgba(30,34,40,0.7)',
    themeWhite: '#000',
    black: '#000',
    borderColor: '#b0aedd',
    borderColorLight: 'rgb(8 60 130 / 28%)',
    labelColor: '#959ca9',
  }
}

function App() {
  const [theme, setTheme] = useState(GlobalTheme.light)
  const changeTheme = () => {
    theme.theme === 'light' ? setTheme(GlobalTheme.dark) : setTheme(GlobalTheme.light);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout currentTheme={theme} changeTheme={changeTheme} />}>
              <Route index element={<Homepage />} />
              <Route path="/pages">
                <Route path="services" >
                  <Route path='service1' element="" />
                </Route>
              </Route>
              <Route path="about" element={<AboutPage />} />
              <Route path="*" />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
