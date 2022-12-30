import React from 'react';
import AboutBanner from '../../CssModulesComponents/AboutBanner/AboutBanner';
import Business from '../../CssModulesComponents/Business/Business';
import Choosen from '../../CssModulesComponents/Choosen/Choosen';
import WorkProjects from '../../CssModulesComponents/WorkProjects/WorkProjects';
import Team from '../../CssModulesComponents/Team/Team';

const AboutPage = () => {
    return (
        <>
            <AboutBanner />
            <Business />
            <Choosen />
            <Team />
            <WorkProjects />
        </>
    )
}

export default AboutPage