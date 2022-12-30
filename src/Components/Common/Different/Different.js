import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SubtitleText, ThemeImg, TitleText } from '../GlobalStyle/GlobalStyle'
import { CardText, Check, Text } from '../Solutions/Solutions.style'
import { DifferentCard, DifferentCard2, DifferentCardText, DifferentCardTitle, DifferentSec, Right, ProgressText } from './Different.style'
import rightImg from '../../../Assets/Images/about27.jpg';
import TeamImg from '../../../Assets/Images/team-svgrepo-com.svg';
import progressBar from '../../../Assets/Images/progress.svg';

const Different = () => {
    return (
        <DifferentSec>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col lg={6} className="order-lg-last">
                        <Right
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <div className='mb-lg-0 mb-4'>
                                <img src={rightImg} alt="img" />
                            </div>
                            <DifferentCard>
                                <div>
                                    <ThemeImg src={TeamImg} alt="" />
                                </div>
                                <div>
                                    <DifferentCardTitle>25000+</DifferentCardTitle>
                                    <DifferentCardText>Happy Clients</DifferentCardText>
                                </div>
                            </DifferentCard>
                            <DifferentCard2>
                                <div className='position-relative'>
                                    <img src={progressBar} alt="" />
                                    <ProgressText>
                                        <DifferentCardTitle>80%</DifferentCardTitle>
                                        <DifferentCardText>Time Saved</DifferentCardText>
                                    </ProgressText>
                                </div>
                            </DifferentCard2>
                        </Right>
                    </Col>
                    <Col lg={5}>
                        <div
                            className='mb-lg-0 mb-5'
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <SubtitleText>WHAT MAKES US DIFFERENT?</SubtitleText>
                            <TitleText className='my-3'>We make spending stress free so you have the perfect control.</TitleText>
                            <Text>Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus. Integer posuere erat a ante venenatis dapibus posuere velit.</Text>
                            <Row>
                                <Col xxl={12}>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="50"
                                        className="d-flex align-items-start mb-4"
                                        data-aos-duration="800"
                                    >
                                        <Check><i className="uil uil-check"></i></Check>
                                        <CardText>Aenean quam ornare. Curabitur blandit.</CardText>
                                    </div>
                                </Col>
                                <Col xxl={12}>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="100"
                                        className="d-flex align-items-start mb-4"
                                        data-aos-duration="800"
                                    >
                                        <Check><i className="uil uil-check"></i></Check>
                                        <CardText>Aenean quam ornare. Curabitur blandit.</CardText>
                                    </div>
                                </Col>
                                <Col xxl={12}>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="150"
                                        className="d-flex align-items-start"
                                        data-aos-duration="800"
                                    >
                                        <Check><i className="uil uil-check"></i></Check>
                                        <CardText>Aenean quam ornare. Curabitur blandit.</CardText>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </DifferentSec>
    )
}

export default Different