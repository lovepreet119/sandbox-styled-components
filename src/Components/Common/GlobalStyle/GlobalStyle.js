import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding:0;
        margin: 0;
        transition: background-color 0.1s ease-in-out;
    }
    body{
        background-color: ${props => props.theme.bodyBg};
    }
    #root{

        // overflow: hidden;
    }
    img{
        max-width: 100%;
    }
ul{
    list-style-type: none;
    margin: 0;
    padding-left: 0;
}
p{
    margin-bottom: 0;
}
a{
    text-decoration: none;
}
span,a{
    display: inline-block;
}
.circular_progress{
    transition: unset;
    .CircularProgressbar-path{
        transition:unset;
    }
}
`;


export const CommonBtn = styled.a`
    padding: 15px 28px;
    text-align: center;
    font-weight: 600;
    color: ${props => props.theme.white};
    background: ${props => props.theme.gradient1};
    display: inline-block;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    transition: 0.3s;
    &:hover{
    color: ${props => props.theme.white};
        transform: translateY(-10px);
    }
`
export const MegaTitle = styled.h1`
color: ${props => props.theme.titleColor};
font-weight: 600;
font-size: calc(1.355rem + 1.26vw);
    @media (min-width: 1200px) {
        font-size: 46px;   
    }
`

export const GradientText = styled.span`
  background: ${props => props.theme.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const CardContainer = styled.div`
@media (min-width: 1480px) {
    max-width: 1470px;
    margin: 0 auto;
}
`

export const SubtitleText = styled(GradientText)`
    display: block;
    font-size: 16px;
    font-weight: 600;

`

export const TitleText = styled.h2`
font-size: 34px;
color: ${props => props.theme.titleColor};
font-weight: 600;
@media (max-width: 1199px) {
    font-size: calc(1.315rem + .78vw);
}
`

export const ThemeChange = styled.button`
position: fixed;
right: 40px;
bottom: 40px;
    background-color: ${props => props.theme.titleColor};
    width: 36px;
    height: 36px;
    color: ${props => props.theme.themeWhite};
    border-radius: 50%;
    border: none;
    z-index: 100;
    outline: none;
    @media (max-width: 991){
        bottom: 30px;
    right: 20px;
    }
`

export const ThemeImg = styled.img`
    filter: ${props => props.theme.themeImg};
`

export const GoToTop = styled.div`
    width: 36px;
    z-index: 100;
    height: 36px;
    position: fixed;
    bottom: 90px;
    transition: 0.3s ease-in-out;
    right: ${props => props.show === 'active' ? "40px" : "-40px"};
    cursor: pointer;
    @media (max-width: 991){
        bottom: 80px;
        right: ${props => props.show === 'active' ? "20px" : "-20px"};
    }
`
export const UpIcon = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.titleColor};
    &.aboutPage{
        color: ${props => props.theme.black};
    }
`

export default GlobalStyle;


