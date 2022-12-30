import styled from "styled-components";
import { Check } from "../Solutions/Solutions.style";

export const DifferentSec = styled.section`
    padding: 140px 0;
    overflow: hidden;
    ${Check}{
        top: 2px;
    }
    
`


export const Right = styled.div`
    position: relative;
    ${'img'}{
        border-radius: 10px;
    }
`

export const DifferentCard = styled.div`
display: flex;
align-items: center;
box-shadow: 0 .25rem 1.75rem rgba(30,34,40,.07);
border-radius: 10px;
    position: absolute;
    left: 0;
    top: 60px;
    transform: translateX(-25%);
    padding: 20px 25px;
    /* background-color: ${props => props.theme.themeWhite}; */
    background-color: ${props => props.theme.bodyBg};
    box-shadow: ${props => props.theme.shadow};
    gap: 15px;
    ${'img'}{
        width: 40px;
    }
    @media (max-width: 767px){
        display: none;
    }
`

export const DifferentCardTitle = styled.h6`
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme.titleColor};
    z-index: 1;
`

export const DifferentCardText = styled.p`

color: ${props => props.theme.textColor};
`

export const DifferentCard2 = styled(DifferentCard)`
    top: unset;
    bottom: 60px; 
    display: block;
    text-align: center;
    padding-bottom: 0;
    @media (max-width: 767px){
        display: none;
    }
   ${'img'}{
    width: 170px;
   }

`

export const ProgressText = styled.div`
position: absolute;
left: 50%;
top: 46px;
width: 100%;
transform: translateX(-50%);
${DifferentCardTitle}{
    font-size: 40px;
}
${DifferentCardText}{
    font-size: 20px;
    color: ${props => props.theme.titleColor};
}
    `