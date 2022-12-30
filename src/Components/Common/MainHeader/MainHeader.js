import React from 'react';
import { Header,   DropdownLink, HeaderDropdownItem, InnerDropdownList, HeaderDropdownList, HeaderInner, HeaderLogo, HeaderNav, HeaderNavLink, HamburgerMenu, MenuLine, HeaderLink } from './MainHeader.style';
import logo from '../../../Assets/Images/logo-dark.png';
import { Container } from 'react-bootstrap';
import { Link,   useLocation } from 'react-router-dom';
import { useState } from 'react';

const MainHeader = () => {


    const [headerClass, setHeaderClass] = useState('');
    window.addEventListener('resize', function () {
        if (document.body.clientWidth < 991) {
            setHeaderClass('')
        }
    })

    window.onscroll = () => {
        if (window.scrollY > 300) {
            if (document.body.clientWidth > 992) {
                setHeaderClass('header_fixed');
            } else {
                setHeaderClass('')
            }
        } else {
            setHeaderClass('');
        }
    }


    const handleDropdown = e => {
        e.preventDefault();
        if (document.body.clientWidth < 991) {
            const thisElement = e.currentTarget; // current Target

            // if ul next to current target (nav link) is hidden
            if (!(thisElement.nextSibling.classList.contains('active-list'))) {

                // direct parent (ul) of current target
                const parentUl = thisElement.parentNode.parentNode;

                // hiding all ul's;
                parentUl.querySelectorAll('ul').forEach(ul => {
                    ul.classList.remove('active-list')
                })

                // removing all active link classname from each link of it's siblings and siblings's children
                parentUl.querySelectorAll('.active').forEach(link => {
                    link.classList.remove('active');
                })

                // show direct ul next to this element;
                thisElement.nextSibling.classList.add('active-list');
                thisElement.classList.add('active');
            }
            // if ul next to current target (nav link) is opened
            else {
                // hide this element's direct ul
                thisElement.nextSibling.classList.remove('active-list');

                // hide all ul's;
                thisElement.nextSibling.querySelectorAll('ul').forEach(ul => {
                    ul.classList.remove('active-list');
                });

                thisElement.classList.remove('active');

            }
        }
    }

    const location = useLocation();

    const [activeSidebar, setActiveSidebar] = useState(false);
    return (
        <Header className={headerClass}>
            <Container>
                <HeaderInner>
                    <HeaderLogo>
                        <img src={logo} alt="logo" />
                    </HeaderLogo>
                    <HeaderNav className={activeSidebar ? 'activeSidebar' : ''}>
                        <HeaderNavLink>
                            <HeaderLink to="/demos">Demos</HeaderLink>
                        </HeaderNavLink>
                        <HeaderNavLink>
                            <DropdownLink onClick={handleDropdown} to="/" className={`${location.pathname.includes('pages') ? 'active' : ''}`}>Pages <span className="header_main_item_icon"><i className='uil uil-angle-down'></i></span></DropdownLink>
                            <HeaderDropdownList >
                                <HeaderDropdownItem>
                                    <DropdownLink onClick={handleDropdown} to="/" className={`${location.pathname.includes('services') ? 'active' : ''}`}>Services  <span><i className='uil uil-angle-right'></i></span></DropdownLink>
                                    <InnerDropdownList >
                                        <HeaderDropdownItem>
                                            <Link to="/pages/services/service1">Services I</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Services II</Link>
                                        </HeaderDropdownItem>
                                    </InnerDropdownList>
                                </HeaderDropdownItem>
                                <HeaderDropdownItem>
                                    <DropdownLink onClick={handleDropdown} to="/">About  <span><i className='uil uil-angle-right'></i></span></DropdownLink>
                                    <InnerDropdownList >
                                        <HeaderDropdownItem>
                                            <Link to="/">About I</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">About II</Link>
                                        </HeaderDropdownItem>
                                    </InnerDropdownList>
                                </HeaderDropdownItem>
                                <HeaderDropdownItem>
                                    <DropdownLink onClick={handleDropdown} to="/">Shop  <span><i className='uil uil-angle-right'></i></span></DropdownLink>
                                    <InnerDropdownList>
                                        <HeaderDropdownItem>
                                            <Link to="/">Shop I</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Shop II</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Product Page</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Shopping Cart</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Checkout</Link>
                                        </HeaderDropdownItem>
                                    </InnerDropdownList>
                                </HeaderDropdownItem>
                                <HeaderDropdownItem>
                                    <DropdownLink onClick={handleDropdown} to="/">Contact  <span><i className='uil uil-angle-right'></i></span></DropdownLink>
                                    <InnerDropdownList>
                                        <HeaderDropdownItem>
                                            <Link to="/">Contact I</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Contact II</Link>
                                        </HeaderDropdownItem>
                                    </InnerDropdownList>
                                </HeaderDropdownItem>
                                <HeaderDropdownItem>
                                    <DropdownLink onClick={handleDropdown} to="/">Career  <span><i className='uil uil-angle-right'></i></span></DropdownLink>
                                    <InnerDropdownList>
                                        <HeaderDropdownItem>
                                            <Link to="/">Career I</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Career II</Link>
                                        </HeaderDropdownItem>
                                    </InnerDropdownList>
                                </HeaderDropdownItem>
                                <HeaderDropdownItem>
                                    <DropdownLink onClick={handleDropdown} to="/">Utility  <span><i className='uil uil-angle-right'></i></span></DropdownLink>
                                    <InnerDropdownList>
                                        <HeaderDropdownItem>
                                            <Link to="/">404 Not Found</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Page Loader</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Sign In I</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Sign In II</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Sign Up I</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Sign Up II</Link>
                                        </HeaderDropdownItem>
                                        <HeaderDropdownItem>
                                            <Link to="/">Terms</Link>
                                        </HeaderDropdownItem>
                                    </InnerDropdownList>
                                </HeaderDropdownItem>
                                <HeaderDropdownItem>
                                    <Link to="/">Pricing</Link>
                                </HeaderDropdownItem>
                                <HeaderDropdownItem>
                                    <Link to="/">One Page</Link>
                                </HeaderDropdownItem>
                            </HeaderDropdownList>
                        </HeaderNavLink>
                        <HeaderNavLink>
                            <HeaderLink to="/projects">Projects</HeaderLink>
                        </HeaderNavLink>
                        <HeaderNavLink>
                            <Link to="/">Blog</Link>
                        </HeaderNavLink>
                        <HeaderNavLink>
                            <Link to="/">Blocks</Link>
                        </HeaderNavLink>
                        <HeaderNavLink>
                            <Link to="/">Documentation</Link>
                        </HeaderNavLink>
                    </HeaderNav>
                    <HamburgerMenu onClick={() => setActiveSidebar(!activeSidebar)} className={`d-lg-none ${activeSidebar ? 'activeMenu' : ''}`}>
                        <MenuLine />
                        <MenuLine />
                        <MenuLine />
                    </HamburgerMenu>
                </HeaderInner>
            </Container>
        </Header>
    )
}

export default MainHeader
