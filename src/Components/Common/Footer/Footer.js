import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../../Assets/Images/logo-dark.png';
import { CommonBtn } from '../GlobalStyle/GlobalStyle';
import { CopyRightText, FooterLogo, FooterSocialLinks, FooterLink, FooterText, FooterTitle, FooterWrapper, SocialLink, InputBox } from './Footer.style';

const Footer = () => {

    const [value, setValue] = useState('')

    return (
        <FooterWrapper>
            <Container>
                <Row>
                    <Col lg={3} md={4}>
                        <FooterLogo className="mb-md-0 mb-4">
                            <Link to="/"> <img src={Logo} alt="" /></Link>
                            <CopyRightText>© 2022 Sandbox. All rights reserved.</CopyRightText>
                            <FooterSocialLinks>
                                <li><SocialLink to="/"><i className='uil uil-twitter'></i></SocialLink></li>
                                <li><SocialLink to="/"><i className='uil uil-facebook-f'></i></SocialLink></li>
                                <li><SocialLink to="/"><i className='uil uil-dribbble'></i></SocialLink></li>
                                <li><SocialLink to="/"><i className='uil uil-instagram'></i></SocialLink></li>
                            </FooterSocialLinks>
                        </FooterLogo>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className="mb-md-0 mb-4">
                            <FooterTitle>Get in Touch</FooterTitle>
                            <FooterText className="my-lg-4 my-2">Moonshine St. 14/05 Light City, London, United Kingdom</FooterText>
                            <FooterLink to="/">info@email.com</FooterLink>
                            <FooterText>00 (123) 456 78 90</FooterText>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className="mb-md-0 mb-4">
                            <FooterTitle>Learn More</FooterTitle>
                            <ul className="d-flex flex-column">
                                <li><FooterLink to="">About Us</FooterLink></li>
                                <li><FooterLink to="">Our Story</FooterLink></li>
                                <li><FooterLink to="">Projects</FooterLink></li>
                                <li><FooterLink to="">Terms of Use</FooterLink></li>
                                <li><FooterLink to="">Privacy Policy</FooterLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={12}>
                        <div>
                            <FooterTitle>Our Newsletter</FooterTitle>
                            <FooterText className="my-lg-4 my-2">Subscribe to our newsletter to get our news & deals delivered to you</FooterText>
                            <InputBox>
                                <input type="text" onChange={e => setValue(e.target.value)} value={value} />
                                <label>Email Address</label>
                                <CommonBtn href="#">Join</CommonBtn>
                            </InputBox>
                        </div>
                    </Col>
                </Row>
            </Container>
        </FooterWrapper>
    )
}

export default Footer