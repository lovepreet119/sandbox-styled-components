import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Logo from '../../../Assets/Images/logo-dark.png';
import CustomCanvas from '../CustomCanvas/CustomCanvas';
import { HeaderLink, HeaderBox, HeaderLinkSocial, HeaderContent, SidebarHeading, CloseBtn, SidebarHeader, Sidebar, HamburgerMenu, MenuLine, SidebarLink, SidebarItem, SidebarItems, SidebarFooter, FooterLink, Phone, HeaderLogo } from './Header.style';
import './Header.scss';

const Header = () => {

    const [headerClass, setHeaderClass] = useState('');

    window.onscroll = () => {
        if (window.scrollY > 300) {
            setHeaderClass('header_fixed');
        } else {
            setHeaderClass('');
        }
    }
    const [show, setShow] = useState(false);

    const handleDropdown = e => {
        const thisElement = e.currentTarget; // current Target

        // if ul next to current target (nav link) is hidden
        if (thisElement.nextSibling.classList.contains('d-none')) {

            // direct parent (ul) of current target
            const parentUl = thisElement.parentNode.parentNode;

            // hiding all ul's;
            parentUl.querySelectorAll('ul').forEach(ul => {
                ul.classList.add('d-none')
            })

            // rotating icon of all nav link's;
            parentUl.querySelectorAll('.rotate').forEach(span => {
                span.classList.remove('rotate');
            })

            // removing all active link classname from each link of it's siblings and siblings's children
            parentUl.querySelectorAll('.active').forEach(link => {
                link.classList.remove('active');
            })

            // show direct ul next to this element;
            thisElement.nextSibling.classList.remove('d-none');

            // rotate icon of this element;
            thisElement.querySelector('span').classList.add('rotate');
            thisElement.classList.add('active');
        }
        // if ul next to current target (nav link) is opened
        else {
            // hide this element's direct ul
            thisElement.nextSibling.classList.add('d-none');

            // hide all ul's;
            thisElement.nextSibling.querySelectorAll('ul').forEach(ul => {
                ul.classList.add('d-none');
            });

            // rotate all icons
            thisElement.querySelector('span').classList.remove('rotate');
            thisElement.classList.remove('active');

        }
    }

    return (
        <>
            <HeaderBox className={` ${headerClass}`}>
                <Container>
                    <Row className='align-items-center flex-nowrap justify-content-between'>
                        <Col xs={'auto'}>
                            <HeaderLogo src={Logo} alt="" />
                        </Col>
                        <Col xs="auto" className="d-lg-block d-none">
                            <HeaderContent className="align-items-lg-center">
                                <li><HeaderLink to="/">Home</HeaderLink></li>
                                <li><HeaderLink to="#">Pages</HeaderLink></li>
                                <li><HeaderLink to="/about">About</HeaderLink></li>
                                <li><HeaderLink to="#">Blogs</HeaderLink></li>
                                <li><HeaderLink to="#">Blocks</HeaderLink></li>
                                <li><HeaderLink to="#">Documentation</HeaderLink></li>
                            </HeaderContent>
                        </Col>
                        <Col xs="auto">
                            <ul className="d-flex align-items-center">
                                <li><HeaderLinkSocial href="#"><i className="uil uil-twitter"></i></HeaderLinkSocial></li>
                                <li><HeaderLinkSocial href="#"><i className="uil uil-facebook-f"></i></HeaderLinkSocial></li>
                                <li><HeaderLinkSocial href="#"><i className="uil uil-dribbble"></i></HeaderLinkSocial></li>
                                <li><HeaderLinkSocial href="#"><i className="uil uil-instagram"></i></HeaderLinkSocial></li>
                                <li>
                                    <HamburgerMenu onClick={() => setShow(true)}>
                                        <MenuLine />
                                        <MenuLine />
                                        <MenuLine />
                                    </HamburgerMenu>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </HeaderBox>
            <CustomCanvas
                show={show}
                handleClose={() => setShow(false)}
            >
                <Sidebar className={show ? 'sidebar_open' : ""}>
                    <SidebarHeader>
                        <SidebarHeading>Sandbox</SidebarHeading>
                        <CloseBtn onClick={() => setShow(false)}><i className="uil uil-multiply"></i></CloseBtn>
                    </SidebarHeader>
                    <SidebarItems className='sidebar_items p-0'>
                        <SidebarItem>
                            <SidebarLink onClick={handleDropdown} href="#">Demos<span><i className="uil uil-angle-down"></i></span></SidebarLink>
                            <ul className="d-none">
                                <SidebarItem><SidebarLink to="/">Home</SidebarLink></SidebarItem>
                                <SidebarItem><SidebarLink href="#">Demo 2</SidebarLink></SidebarItem>
                                <SidebarItem><SidebarLink href="#">Demo 3</SidebarLink></SidebarItem>
                                <SidebarItem><SidebarLink href="#">Demo 4</SidebarLink></SidebarItem>
                            </ul>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink onClick={handleDropdown} href="#">Pages <span><i className='uil uil-angle-down'></i></span></SidebarLink>
                            <ul className='d-none'>
                                <SidebarItem>
                                    <SidebarLink onClick={handleDropdown} href="#">Services <span><i className="uil uil-angle-down"></i></span></SidebarLink>
                                    <ul className="d-none">
                                        <SidebarItem><SidebarLink href="">Service 1</SidebarLink></SidebarItem>
                                        <SidebarItem><SidebarLink href="">Service 2</SidebarLink></SidebarItem>
                                    </ul>
                                </SidebarItem>
                                <SidebarItem>
                                    <SidebarLink onClick={handleDropdown} href="#">About <span><i className="uil uil-angle-down"></i></span></SidebarLink>
                                    <ul className="d-none">
                                        <SidebarItem>
                                            <SidebarLink onClick={handleDropdown} href="#">Shop <span><i className="uil uil-angle-down"></i></span></SidebarLink>
                                            <ul className="d-none">
                                                <SidebarItem><SidebarLink href="#">Shop 1</SidebarLink></SidebarItem>
                                                <SidebarItem><SidebarLink href="#">Shop 2</SidebarLink></SidebarItem>
                                                <SidebarItem><SidebarLink href="#">Shop 3</SidebarLink></SidebarItem>
                                            </ul>
                                        </SidebarItem>
                                        <SidebarItem><SidebarLink href="#">Contact</SidebarLink></SidebarItem>
                                        <SidebarItem><SidebarLink href="#">Career</SidebarLink></SidebarItem>
                                    </ul>
                                </SidebarItem>
                                <SidebarItem><SidebarLink href="#">Shop</SidebarLink></SidebarItem>
                                <SidebarItem><SidebarLink href="#">Contact</SidebarLink></SidebarItem>
                                <SidebarItem><SidebarLink href="#">Career</SidebarLink></SidebarItem>
                            </ul>
                        </SidebarItem>
                        <SidebarItem><SidebarLink href="#">Projects</SidebarLink></SidebarItem>
                        <SidebarItem><SidebarLink href="#">Blogs</SidebarLink></SidebarItem>
                        <SidebarItem><SidebarLink href="#">Blocks</SidebarLink></SidebarItem>
                        <SidebarItem><SidebarLink href="#">Documentations</SidebarLink></SidebarItem>
                    </SidebarItems>
                    <SidebarFooter>
                        <FooterLink href="#">info@gmail.com</FooterLink>
                        <Phone as="p">00 (123) 456 78 90</Phone>
                        <ul className='d-flex p-0'>
                            <li><HeaderLinkSocial className="pb-0 ms-0" href="#"><i className="uil uil-twitter"></i></HeaderLinkSocial></li>
                            <li><HeaderLinkSocial className="pb-0" href="#"><i className="uil uil-facebook-f"></i></HeaderLinkSocial></li>
                            <li><HeaderLinkSocial className="pb-0" href="#"><i className="uil uil-dribbble"></i></HeaderLinkSocial></li>
                            <li><HeaderLinkSocial className="pb-0" href="#"><i className="uil uil-instagram"></i></HeaderLinkSocial></li>
                        </ul>
                    </SidebarFooter>
                </Sidebar>
            </CustomCanvas>
        </>
    )
}

export default Header;