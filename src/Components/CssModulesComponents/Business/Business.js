import React  from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Business.module.scss';
import commonStyles from '../CommonStyles/CommonStyles.module.scss';
import { Chart, MegaPhone, Settings, Target } from '../../../Assets/Images/SvgImgs';

const Business = () => {

    const dummy2 = [
        { aos: 'right', icon: <MegaPhone />, title: 'Marketing', text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.' },
        { aos: 'up', icon: <Target />, title: 'Strategy', text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.' },
        { aos: 'down', icon: <Settings />, title: 'Development', text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.' },
        { aos: 'left', icon: <Chart />, title: 'Data Analysis', text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.' },
    ]

    const dummy1 = [
        { label: 'Marketing', done: 100, color: '#427CDB' },
        { label: 'Strategy', done: 80, color: '#4CC6A1' },
        { label: 'Development', done: 85, color: '#F8B365' },
        { label: 'Data Analysis', done: 90, color: '#F5857C' },
    ]
    return (
        <section id="business_sec" className={styles.BusinesSec}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className={`${styles.BusinesSecLeft} mb-lg-0 mb-3`}>
                            <h2 className={commonStyles.TitleText}>The full service we are offering is specifically designed to meet your business needs and projects.</h2>
                            <p className="mt-lg-4 mt-2">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur duis mollis commodo.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.BusinesSecRight}>
                            {
                                dummy1.map((data, index) => {
                                    return (
                                        <div key={index} className={styles.ProgressBox}>
                                            <div className={`${styles.ProgressBoxHead} d-flex justify-content-between`}>
                                                <h5>{data.label}</h5>
                                                <h5>{data.done}%</h5>
                                            </div>
                                            <div className={`${styles.ProgressBoxLine}`}>
                                                <span style={{ width: `${data.done}%`, backgroundColor: data.color }}></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
                <div className={styles.BusinesSecContent}>
                    <Row>
                        {
                            dummy2.map((data, index) => {
                                return (
                                    <Col
                                        data-aos={`fade-${data.aos}`}
                                        data-aos-duration={'1000'}
                                        className={`${styles.BusinessCardCol}`}
                                        key={index}
                                        lg={3}
                                        md={6}
                                    >
                                        <div
                                            className={styles.BusinessCard}
                                            data-card={`card${index + 1}`}
                                        >
                                            <span className={styles.BusinessCardIcon}>{data.icon}</span>
                                            <h3>{data.title}</h3>
                                            <p>{data.text}</p>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Business