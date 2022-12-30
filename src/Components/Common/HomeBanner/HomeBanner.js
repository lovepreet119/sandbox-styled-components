import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MegaTitle, GradientText, CardContainer, CommonBtn } from '../GlobalStyle/GlobalStyle';
import { HomeSubText, Sectionbox, BannerRight, BannerLeft } from './HomeBanner.style';
import bannerBg from '../../../Assets/Images/sectionbg.png';
import bannerRightImg from '../../../Assets/Images/banner-right.png';

const HomeBanner = () => {
    return (
        <>
            <section className='mt-2'>
                <CardContainer>
                    <Sectionbox bannerBg={bannerBg}>
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <BannerLeft className='text-lg-start text-center'>
                                        <MegaTitle>Networking <GradientText>solutions</GradientText> for worldwide communication</MegaTitle>
                                        <HomeSubText>We're a company that focuses on establishing long-term relationships with customers.</HomeSubText>
                                        <CommonBtn as={'button'}>Explore Now</CommonBtn>
                                    </BannerLeft>
                                </Col>
                                <Col lg={6}>
                                    <div className='position-relative'>
                                        <BannerRight src={bannerRightImg} alt="img" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Sectionbox>
                </CardContainer>
            </section>
        </>
    )
}

export default HomeBanner