import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Team.module.scss';
import commonStyles from '../CommonStyles/CommonStyles.module.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import t1 from '../../../Assets/Images/t1.jpg';
import t2 from '../../../Assets/Images/t2.jpg';
import t3 from '../../../Assets/Images/t3.jpg';
import t4 from '../../../Assets/Images/t4.jpg';
import t5 from '../../../Assets/Images/t5.jpg';
const Team = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    const dummy = [
        { img: t1, name: 'Cory Zamora', profession: 'Marketing Specialist', about: 'Etiam porta sem magna malesuada mollis.' },
        { img: t2, name: 'Coriss Ambady', profession: 'Financial Analyst', about: 'Aenean eu leo quam. Pellentesque ornare lacinia.' },
        { img: t3, name: 'Nikolas Brooten', profession: 'Sales Manager', about: 'Donec ornare elit quam porta gravida at eget.' },
        { img: t4, name: 'Jackie Sanders', profession: 'Investment Planner', about: 'Nullam risus eget urna mollis ornare vel eu leo.' },
        { img: t5, name: 'Tina Geller', profession: 'Assistant Buyer', about: 'Vivamus sagittis lacus vel augue laoreet rutrum.' },
    ]

    return (
        <section className={styles.TeamSec}>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className={styles.TeamSecHead}>
                            <h6
                                className={commonStyles.BlueTitle}
                                data-aos="fade-right"
                                data-aos-duration="800"
                            >Meet the team</h6>
                            <h2
                                className={`${commonStyles.TitleText} my-4`}
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >Save your time and money by choosing our professional team.</h2>
                            <p
                                className="mb-4"
                                data-aos="fade-right"
                                data-aos-duration="1200"
                            >Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros tempus porttitor.</p>
                            <button
                                className={commonStyles.CommonBtn}
                                data-aos="fade-right"
                                data-aos-duration="1400"
                            >See All Members <span><i className="uil uil-angle-right-b"></i></span></button>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="mt-lg-0 mt-5">
                            <Slider {...settings}>
                                {
                                    dummy.map((data, index) => {
                                        return (
                                            <div key={index} className={styles.TeamSlide}>
                                                <div className={styles.TeamSlideImg}>
                                                    <img src={data.img} alt="" />
                                                </div>
                                                <div className={styles.TeamSlideText}>
                                                    <h3>{data.name}</h3>
                                                    <span>{data.profession}</span>
                                                    <p>{data.about}</p>
                                                </div>
                                                <div className={styles.TeamSlideLinks}>
                                                    <Link to="/"><i className="uil uil-instagram"></i></Link>
                                                    <Link to="/"><i className="uil uil-twitter-alt"></i></Link>
                                                    <Link to="/"><i className="uil uil-youtube"></i></Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team