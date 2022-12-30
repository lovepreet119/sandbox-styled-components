import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer';
import { GoToTop, ThemeChange, UpIcon } from '../GlobalStyle/GlobalStyle';
import Header from '../Header/Header';
import MainHeader from '../MainHeader/MainHeader';

const MainLayout = (props) => {
    const [percentage, setPercentage] = useState(window.scrollY);
    const [showGoToBtn, setShowGoBtn] = useState('');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            setShowGoBtn('active');
        } else {
            setShowGoBtn('')
        }
        const totalPageHeight = document.body.clientHeight - window.screen.height;
        const val = (window.scrollY / totalPageHeight) * 100;
        setPercentage(val);
    })

    const location = useLocation();

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     console.log('new render')
    // }, [location])
    return (
        <>
            <div className="main-layout">
                {/* <Header /> */}
                <MainHeader />
                {
                    !(location.pathname.includes('/about')) &&
                    <ThemeChange onClick={props.changeTheme}>{props.currentTheme.theme === 'light' ? <i className="uil uil-sun"></i> : <i className="uil uil-moon"></i>}</ThemeChange>
                }
                <GoToTop show={showGoToBtn} className={showGoToBtn} onClick={() => window.scrollTo(0, 0)}>
                    <CircularProgressbar className='circular_progress' value={percentage} text={""} />
                    <UpIcon className={location.pathname.includes('/about') ? 'aboutPage' : ''}><i className="uil uil-arrow-up"></i></UpIcon>
                </GoToTop>
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout