import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './AboutBanner.module.scss';
import commonStyles from '../CommonStyles/CommonStyles.module.scss';
import i8 from '../../../Assets/Images/i8.png';
const AboutBanner = () => {
    return (
        <section className={styles.AboutSec}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="text-center">
                            <h2 className={commonStyles.MegaTitle}>About Us</h2>
                            <p className={`${commonStyles.SubTitleText} mt-3 mb-5`}>A company turning ideas into beautiful things.</p>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={`text-center ${styles.AboutSecImg}`}>
                            <img src={i8} alt="about banner img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutBanner