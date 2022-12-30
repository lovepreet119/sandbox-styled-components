import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardContainer, CommonBtn, GradientText, TitleText } from '../GlobalStyle/GlobalStyle';
import { CommunitySec, CommunitySecWrapper } from './Community.style';

const Community = () => {
    return (
        <CommunitySec>
            <CardContainer>
                <CommunitySecWrapper fluid>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xxl={6} xl={8} lg={10}>
                                <GradientText>JOIN OUR COMMUNITY</GradientText>
                                <TitleText>We are trusted by over 5000+ clients. Join them now and grow your business.</TitleText>
                                <CommonBtn as={Link} to="/" data-aos="fade-up" data-aos-duration="700">Get Started</CommonBtn>
                            </Col>
                        </Row>
                    </Container>
                </CommunitySecWrapper>
            </CardContainer>
        </CommunitySec>
    )
}

export default Community