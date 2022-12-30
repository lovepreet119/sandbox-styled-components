import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import styles from './Choosen.module.scss';
import commonStyles from '../CommonStyles/CommonStyles.module.scss';
import i3 from '../../../Assets/Images/i3.png';
import { Bulb, PenDesign, PieChart } from '../../../Assets/Images/SvgImgs';

const Choosen = () => {
    const dummy = [
        { icon: <Bulb />, title: 'Collect Ideas', text: 'Nulla vitae elit libero pharetra augue dapibus.' },
        { icon: <PieChart />, title: 'Data Analysis', text: 'Vivamus sagittis lacus augue laoreet vel.' },
        { icon: <PenDesign />, title: 'Magic Touch', text: 'Cras mattis consectetur purus sit amet.' },
    ]

    const dummy2 = [
        { title: 'Professional Design', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt abore et dolore magna aliqua.Ut enim ad        minim veniam, quis nostrud exercitation ullamco laboris nisi ut        aliquip ex ea commodo consequat.Duis aute irure dolor in        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla        pariatur.Excepteur sint occaecat cupidatat non proident, sunt in        culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'Top-Notch Support', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt abore et dolore magna aliqua.Ut enim ad        minim veniam, quis nostrud exercitation ullamco laboris nisi ut        aliquip ex ea commodo consequat.Duis aute irure dolor in        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla        pariatur.Excepteur sint occaecat cupidatat non proident, sunt in        culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'Header and Slider Options', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt abore et dolore magna aliqua.Ut enim ad        minim veniam, quis nostrud exercitation ullamco laboris nisi ut        aliquip ex ea commodo consequat.Duis aute irure dolor in        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla        pariatur.Excepteur sint occaecat cupidatat non proident, sunt in        culpa qui officia deserunt mollit anim id est laborum.' },
    ]

    return (
        <section className={styles.ChooseSec}>
            <Container>
                <div className="pb-lg-5 pb-3">
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div
                                className={`mb-4`}
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <img src={i3} alt="" />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div
                                className={`${styles.ChooseSecContent} ps-xl-5`}
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <h6 className={`${commonStyles.BlueTitle} main-title`}>How it works?</h6>
                                <h2 className={`${commonStyles.TitleText} mt-2`}>Everything you need on creating a business process</h2>
                                <ul className="mt-4">
                                    {
                                        dummy.map((data, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className={styles.ChooseBox}
                                                    data-aos="fade-left"
                                                    data-aos-duration={`${800 + (index * 100)}`}
                                                >
                                                    <div className={styles.ChooseBoxImg}>
                                                        <span>{data.icon}</span>
                                                    </div>
                                                    <div className={styles.ChooseBoxContent}>
                                                        <h3>{data.title}</h3>
                                                        <p>{data.text}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="pt-lg-5 pt-3">
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <div
                                className={`pe-xl-5 ${styles.ChooseSecContent}`}
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <h6 className={commonStyles.BlueTitle}>Why choose uS?</h6>
                                <h2 className={`${commonStyles.TitleText} mt-3`}>A few reasons why our valued customers choose us.</h2>
                                <Accordion >
                                    {
                                        dummy2.map((data, index) => {
                                            return (
                                                <Accordion.Item
                                                    key={index}
                                                    eventKey={`${index}`}
                                                    data-aos="fade-right"
                                                    data-aos-duration={`${800 + (index * 150)}`}
                                                >
                                                    <Accordion.Header>{data.title}</Accordion.Header>
                                                    <Accordion.Body>{data.content}</Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        })
                                    }
                                </Accordion>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div
                                className={`pt-4`}
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <img src={i3} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Choosen