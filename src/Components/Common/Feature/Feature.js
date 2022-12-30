import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SubtitleText, ThemeImg, TitleText } from '../GlobalStyle/GlobalStyle'
import { FeatureSec, FeatureTitle, FeatureText, FeatureBox } from './Feature.style'
import Icon1 from '../../../Assets/Images/laptop-svgrepo-com.svg';
import Icon2 from '../../../Assets/Images/security-svgrepo-com.svg';
import Icon3 from '../../../Assets/Images/cloud-svgrepo-com.svg';
import Icon4 from '../../../Assets/Images/network-svgrepo-com.svg';
import Icon5 from '../../../Assets/Images/setting-svgrepo-com.svg';
import Icon6 from '../../../Assets/Images/database-svgrepo-com.svg';
const Feature = () => {
    return (
        <FeatureSec>
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg="7" md={10} xs={12}>
                        <SubtitleText className='text-center'>OUR FEATURES</SubtitleText>
                        <TitleText className='text-center'>The service we offer is specifically designed to meet your needs.</TitleText>
                    </Col>
                </Row>
                <Row  data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="600">
                    <Col lg={4} md={6}>
                        <FeatureBox className="d-flex">
                            <div>
                                <ThemeImg src={Icon1} alt="" />
                            </div>
                            <div>
                                <FeatureTitle>Server Configuration</FeatureTitle>
                                <FeatureText>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</FeatureText>
                            </div>
                        </FeatureBox>
                    </Col>
                    <Col lg={4} md={6}>
                        <FeatureBox className="d-flex">
                            <div>
                                <ThemeImg src={Icon2} alt="" />
                            </div>
                            <div>
                                <FeatureTitle>IT Solutions</FeatureTitle>
                                <FeatureText>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</FeatureText>
                            </div>
                        </FeatureBox>
                    </Col>
                    <Col lg={4} md={6}>
                        <FeatureBox className="d-flex">
                            <div>
                                <ThemeImg src={Icon5} alt="" />
                            </div>
                            <div>
                                <FeatureTitle>Software & Integration</FeatureTitle>
                                <FeatureText>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</FeatureText>
                            </div>
                        </FeatureBox>
                    </Col>
                    <Col lg={4} md={6}>
                        <FeatureBox className="d-flex">
                            <div>
                                <ThemeImg src={Icon4} alt="" />
                            </div>
                            <div>
                                <FeatureTitle>Network Security</FeatureTitle>
                                <FeatureText>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</FeatureText>
                            </div>
                        </FeatureBox>
                    </Col>
                    <Col lg={4} md={6}>
                        <FeatureBox className="d-flex">
                            <div>
                                <ThemeImg src={Icon3} alt="" />
                            </div>
                            <div>
                                <FeatureTitle>Cloud Services</FeatureTitle>
                                <FeatureText>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</FeatureText>
                            </div>
                        </FeatureBox>
                    </Col>
                    <Col lg={4} md={6}>
                        <FeatureBox className="d-flex">
                            <div>
                                <ThemeImg src={Icon6} alt="" />
                            </div>
                            <div>
                                <FeatureTitle>Wireless Networking</FeatureTitle>
                                <FeatureText>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</FeatureText>
                            </div>
                        </FeatureBox>
                    </Col>
                </Row>
            </Container>
        </FeatureSec>
    )
}

export default Feature