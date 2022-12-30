import React from 'react'
import Community from '../../Common/Community/Community' 
import Different from '../../Common/Different/Different'
import Feature from '../../Common/Feature/Feature'
import HomeBanner from '../../Common/HomeBanner/HomeBanner'
import Solutions from '../../Common/Solutions/Solutions'


const Homepage = () => {
    return (
        <>
            <HomeBanner />
            <Feature data-aos="fade-up" />
            <Solutions />
            <Different />
            <Community />
        </>
    )
}

export default Homepage