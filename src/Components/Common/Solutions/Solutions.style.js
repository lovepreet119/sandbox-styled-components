import styled from "styled-components";

export const SolutionSec = styled.section`
    overflow:hidden;
`;


export const Text = styled.p`
    font-size: 16px;
    color: ${props => props.theme.textColor};
    line-height: 28px;
    margin-bottom: 30px;
`

export const Check = styled.div`
background-color: ${props => props.theme.blueBg};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: ${props => props.theme.hoverColor};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    top: 3px;
`

export const CardText = styled.p`
font-size: 16px;
color: ${props => props.theme.textColor};
margin-left: 10px;

`