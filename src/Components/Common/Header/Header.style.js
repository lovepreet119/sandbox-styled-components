import { Link } from "react-router-dom";
import styled from "styled-components";


export const HeaderLogo = styled.img`
    @media (max-width: 991px ) {
        max-width: 100px;
    }
`


export const HeaderLink = styled(Link)`
    font-weight: 600;
    font-size: 17px;
    transition: 0.3s;
    padding: 26px 20px;
    display: block;
    
    color: ${props => props.theme.titleColor};
    &:hover{
        color: ${props => props.theme.hoverColor};
    }
`

export const HeaderLinkSocial = styled.a`
transition: 0.3s;
    color: ${props => props.theme.titleColor};
    font-size: 20px;
    margin: 0 0 0 0.7rem;
    padding: 26px 0;
    display: block;
    @media (max-width: 991px){
        margin: 0 0 0 0.2rem;
    }

    &:hover{
        transform: translateY(-5px);
        color: ${props => props.theme.hoverColor};
    }
`


export const HeaderBox = styled.header`
    background-color: ${props => props.theme.bodyBg};
    z-index: 1000;
    transition: 0.3s;
    position: sticky;
    width: 100%;
    top: -82px;
    transform: translateY(0%);
    &.header_fixed{
        transform: translateY(100%);
        box-shadow: ${props => props.theme.shadow};
    }
` 
export const HeaderContent = styled.ul`
display: flex;
padding-left: 0;
@media (max-width: 991px){
    display: none;
} 
` 
export const Sidebar = styled.div`
display: flex;
overflow-y: auto;
flex-direction: column;

    max-width: 300px;
    padding: 30px;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.bodyBg};
    left: 0;
    top: 0;
    position: absolute;
    transition: all 0.3s ease-in-out;
    box-shadow: ${props => props.theme.shadow};
    transform: translateX(-100%);   
     @media (min-width: 992px) {
        display: none;
    }
    @media (max-width: 767px) {
        max-width: 400px;
    }
    @media (max-width: 575px){
        max-width: 100%;
    }
    &::-webkit-scrollbar {
    display: none;
}
`

// CustomCanvas{
//     Sidbar{
//         transform: translateX(0%);
//     }
// }



export const SidebarHeader = styled.li`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;

`


export const SidebarHeading = styled.h4`
    font-size: calc(1.575rem + .3vw);
    margin-bottom: 0;
    color: ${props => props.theme.titleColor};
    font-weight: 700;
`



export const CloseBtn = styled.button`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: ${props => props.theme.theme === 'light' ? props.theme.blueBg : props.theme.black};
border: none;
color: ${props => props.theme.titleColor};
font-size: 20px;
`;

export const MenuLine = styled.li`
    width: 30px;
    border-radius: 8px;
    background-color: ${props => props.theme.titleColor};
    height: 3px;
    transition: 0.3s;
`

export const HamburgerMenu = styled.ul`
padding-left: 0;
margin-left: 30px;
    justify-content: space-between;
    flex-direction: column;
    width: 38px;
    cursor: pointer;
    height: 24.5px;
    display: none;
    @media (max-width: 991px){
        display: flex;
    }
    @media (max-width: 575px) {
        margin-left: 10px;
    }
    &.hamburger_menu_open{
        ${MenuLine}{
            &:first-child{
        transform-origin: left;
        transform: rotate(45deg);
    }
    &:nth-child(2){
        opacity: 0;
    }
    &:last-child{
        transform-origin: left;
        transform: rotate(-45deg);
    }
        }
    }
`
export const SidebarItems = styled.ul`
font-size: 18px;
`

export const SidebarItem = styled.li`
font-size: 0.9em;
ul{
    padding-left: 10px;
}
`

export const SidebarLink = styled(Link)`
    color: ${props => props.theme.titleColor};
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    &.active{
        color: ${props => props.theme.hoverColor};
        &:hover{
        color: ${props => props.theme.hoverColor};
        }
    }
    &:hover, &:active{
        color: ${props => props.theme.titleColor};
    }
    & span{
        font-size: 1.4rem;
        transform: rotate(-90deg);
        &.rotate{
            transform: rotate(0);
        }
    }
`;

export const SidebarFooter = styled.div`
margin-top: auto;
`

export const FooterLink = styled.a`
    color: ${props => props.theme.titleColor};
    transition: 0.3s;
    font-size: 17px;
    font-weight: 500;
    &:hover{
        color: ${props => props.theme.hoverColor};
    }
`

// export const Phone = styled(FooterLink)`
// &:hover{
//     color: ${props => props.theme.titleColor};
// }
// `

export const Phone = styled.h5(props => ({
    color: props.theme.titleColor,
    transition: '0.3s',
    fontSize: '17px',
    fontWeight: 500,
}))