import styled from "styled-components";

export const FeatureSec = styled.section`
    padding: 140px 0;
    overflow: hidden;
    @media (max-width: 1199px) {
        padding: 100px 0 60px;
    }
`

export const FeatureBox = styled.div`
    gap: 15px;
    margin-bottom: 40px;
    ${"img"}{
        width: 100px;
    }

`


export const FeatureTitle = styled.h4`
    font-size: 22px;
    font-weight: 500;
    color: ${props => props.theme.titleColor};
`

export const FeatureText = styled.p`
    font-size: 16px;
    color: ${props => props.theme.textColor};
`