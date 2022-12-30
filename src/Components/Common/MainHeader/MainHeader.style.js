import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    z-index: 1000; 
    position: relative;
    padding: 10px 0;
    background-color: ${props => props.theme.bodyBg};
    z-index: 1000;
    transition: 0.3s;
    position: sticky;
    width: 100%;
    top: -92px;
    transform: translateY(0%);
    &.header_fixed{
        transform: translateY(100%);
        box-shadow: ${props => props.theme.shadow};
    }
    @media (max-width: 991px) {
        padding: 20px 0;
        position: fixed;
        top: 0;
        left: 0;
    }
`;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;  
    justify-content: space-between;
`;

export const HeaderLogo = styled.div``;

export const HeaderNav = styled.ul`
    @media (min-width: 992px){
        display: flex;
        align-items: center;
    }
    @media (max-width: 991px) {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        max-width: 250px;
        width: 100%;
        background-color: ${props => props.theme.bodyBg};
        box-shadow: ${props => props.theme.shadow};
        padding: 30px 30px;
        transform: translateX(-100%);
        transition: 0.3s ease-in-out;
        &.activeSidebar{
            transform: unset;
        }
    }
`;



export const HeaderDropdownList = styled.ul` 
    border-radius: 10px;
    padding: 20px 0;
    width: 200px;
    position: absolute;
    top: 100%;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.15s ease-in-out;
    background-color: ${props => props.theme.themeWhite} ;
    box-shadow:  ${props => props.theme.shadow};
    @media (max-width: 991px){
            position: static;
    visibility: visible;
    opacity: 1;
    transform: none;
    display: none;
    box-shadow: none;
    margin-top: 0;
    padding: 0;
        &.active-list{
            display: block;
        }
    }
`;
export const HeaderNavLink = styled.li`
    position: relative;
    a{
        display:  block; 
        color: ${props => props.theme.titleColor};
        font-weight: 600;
        padding: 10px 0;
        &:hover{
            color: ${props => props.theme.hoverColor};
        }
        @media (min-width: 992px){
            display: inline-block;
            padding: 24px 20px;
        }
    }
    &:hover{
        @media (min-width: 992px){
            >${HeaderDropdownList}{
                visibility: visible;
                opacity: 1;
                transform: none;
            }
        }
    }
`;

export const HeaderNavLinks = styled.div``;
export const HeaderLink = styled(NavLink)`
    &.active{
        color: ${props => props.theme.hoverColor};
    }
`
export const DropdownLink = styled(Link)` 
   @media (max-width: 991px){
    /* span{
        transition: all .3s linear;
    } */
    .header_main_item_icon{
        transform: rotate(-90deg);
    }
    
    &.active{
        color: ${props => props.theme.hoverColor};
        span{
            display: inline-block;
            transform: rotate(90deg);
            &.header_main_item_icon{
                transform: rotate(0);
            }
        }
    }
   }

`

export const InnerDropdownList = styled.ul`
    margin-left: 10px;
    padding: 20px 0;
    background-color: ${props => props.theme.themeWhite} ;
    box-shadow:  ${props => props.theme.shadow};  
    border-radius: 10px;
    width: 200px;
    position: absolute; 
    top: 0;
    left: 100%;
    visibility: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.15s ease-in-out; 
    padding: 0 10px;
    &::before{
        content: '';
        position: absolute;
        right: 100%;
        width: 10px;
        height: 100%;
        background-color: transparent;
        top: 0;
    }
    @media (max-width: 991px) {
        position: static;
        visibility: visible;
        opacity: 1;
        transform: none;
        display: none;
        box-shadow: none;
        margin-top: 0;
        padding: 0;
        &.active-list{
            display: block;
        }
    }
    
`

export const HeaderDropdownItem = styled.li` 
    position: relative;
    a{
        color: ${props => props.theme.titleColor};
        font-weight: 600;
        display: inline-block;
        padding: 10px 20px;
        width: 100%;
        display: inline-flex; 
        justify-content: space-between;
        align-items: center;
        padding: 4px 20px;
        line-height: 27px;
        &:hover{

            color: ${props => props.theme.hoverColor};
        }
    }
    
    &:hover{
        @media (min-width: 992px){
            >${InnerDropdownList}{
                visibility: visible;
                opacity: 1;
                transform: none;
            }
        }
    }
    &.active{
        
    }
`;

export const HeaderDropdown = styled.li`
    position: relative;
    >a{ 
        display:  block; 
        color: ${props => props.theme.titleColor};
        font-weight: 600;
        padding: 10px 0;
        &:hover{
            color: ${props => props.theme.hoverColor};
        }
        @media (min-width: 992px){
            display: inline-block;
            padding: 24px 20px;
        } 
    }
    &:hover{
        >${HeaderDropdownList}{
            visibility: visible;
            opacity: 1;
            transform: none;
        }
    }
`;

export const MenuLine = styled.li`
    width: 30px;
    border-radius: 8px;
    background-color: ${props => props.theme.titleColor};
    height: 3px;
                transform-origin: left;
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
    &.activeMenu{
        ${MenuLine}{
            &:first-child{
                transform: rotate(45deg);
            }
            &:nth-child(2){
                opacity: 0;
            }
            &:last-child{
                transform: rotate(-45deg);
            }
        }
    }
` 