import styled from "styled-components";


export const Sectionbox = styled.div`
    padding: 90px 0;
    background: ${props => props.theme.background_gradient};
    @media (min-width: 1479px){
        border-radius: 20px;
    }
    @media (max-width: 991px) {
            padding: 40px 0 90px;
            padding-top: 100px;
    }
`

export const HomeSubText = styled.p`
font-size: 23px;
font-weight: 500;
margin: 20px 0 35px;
color: ${props => props.theme.textColor};
@media (max-width: 991px){
    font-size: 20px;
}
`

export const BannerLeft = styled.div`
    @media (min-width: 1199px){
        margin-top: 50px;
        margin-bottom: 50px;
    }
    @media (max-width: 991px){
        margin-bottom: 60px;
    }
`

export const BannerRight = styled.img` 
    margin-bottom: -160px;
`