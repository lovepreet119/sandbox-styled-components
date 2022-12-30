import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import leftImg from '../../../Assets/Images/3d2.png';
import { SubtitleText, TitleText } from '../GlobalStyle/GlobalStyle';
import { CardText, SolutionSec, Check, Text } from './Solutions.style';

const Solutions = () => {
    return (
        <SolutionSec>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col lg={5} className="mb-lg-0 mb-5" >
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <img src={leftImg} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <SubtitleText>HAVE PERFECT CONTROL</SubtitleText>
                            <TitleText className='my-3'>We bring solutions to make life easier for our customers.</TitleText>
                            <Text>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue rutrum.</Text>
                            <Row>
                                <Col xxl={6}>
                                    <div className="d-flex align-items-start mb-4">
                                        <Check><i className="uil uil-check"></i></Check>
                                        <CardText>Aenean quam ornare. Curabitur blandit.</CardText>
                                    </div>
                                </Col>
                                <Col xxl={6}>
                                    <div className="d-flex align-items-start mb-4">
                                        <Check><i className="uil uil-check"></i></Check>
                                        <CardText>Aenean quam ornare. Curabitur blandit.</CardText>
                                    </div>
                                </Col>
                                <Col xxl={6}>
                                    <div className="d-flex align-items-start mb-4 mb-xxl-0">
                                        <Check><i className="uil uil-check"></i></Check>
                                        <CardText>Aenean quam ornare. Curabitur blandit.</CardText>
                                    </div>
                                </Col>
                                <Col xxl={6}>
                                    <div className="d-flex align-items-start">
                                        <Check><i className="uil uil-check"></i></Check>
                                        <CardText>Aenean quam ornare. Curabitur blandit.</CardText>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </SolutionSec>
    )
}

export default Solutions