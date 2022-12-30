import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './WorkProjects.module.scss';
import commonStyles from '../CommonStyles/CommonStyles.module.scss';

const WorkProjects = () => {
  // const dummy = [
  //   { title: 'Collect Ideas', content: 'Nulla vitae elit libero pharetra augue dapibus.' },
  //   { title: 'Data Analysis', content: 'Vivamus sagittis lacus vel augue laoreet.' },
  //   { title: 'Finalize Product', content: 'Cras mattis consectetur purus sit amet.' },
  // ]
  return (
    <section className={styles.ProjectSec}>
      <Container>
        <Row className="justify-content-center">
          <Col xxl={5} lg={6} md={8}>
            <h2 className={`${commonStyles.TitleText} text-center mb-3`}>Here are 3 working steps to organize our business projects.</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className={styles.ProjectSecLeft}>
              <h3>How It Works?</h3>
              <h4>Find out everything you need to know and more about how we create our business process models.</h4>
              <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare.</p>
              <p className="my-3">Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis.</p>
              <button className={commonStyles.CommonBtn}>Check out <span><i className="uil uil-arrow-right"></i></span></button>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.ProjectSecRight}>
              <Row>
                <Col xs={12} className={styles.ProjectSecRightBoxCol}>
                  <div className={styles.ProjectSecRightBox}>
                    <div className={styles.ProjectSecRightBoxCounter}><span>01</span></div>
                    <div className={styles.ProjectSecRightBoxContent}>
                      <h5>Collect Ideas</h5>
                      <p>Nulla vitae elit libero pharetra augue dapibus.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} className={styles.ProjectSecRightBoxCol}>
                  <div className={`${styles.ProjectSecRightBox} mt-4`}>
                    <div className={styles.ProjectSecRightBoxCounter}><span>02</span></div>
                    <div className={styles.ProjectSecRightBoxContent}>
                      <h5>Data Analysis</h5>
                      <p>Vivamus sagittis lacus vel augue laoreet.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} className={styles.ProjectSecRightBoxCol}>
                  <div className={`${styles.ProjectSecRightBox} mt-4`}>
                    <div className={styles.ProjectSecRightBoxCounter}><span>03</span></div>
                    <div className={styles.ProjectSecRightBoxContent}>
                      <h5>Finalize Product</h5>
                      <p>Cras mattis consectetur purus sit amet.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WorkProjects;