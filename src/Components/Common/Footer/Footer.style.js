import { Link } from "react-router-dom";
import styled from "styled-components";
import { CommonBtn } from "../GlobalStyle/GlobalStyle";

export const FooterWrapper = styled.div`
    padding: 100px 0;
    background-color: ${props => props.theme.bodyBg
    };
    @media (max-width: 1199px){
        padding: 60px;
    }
    @media (max-width: 767px){
        padding: 30px;
    }
`

export const FooterLogo = styled.div`


`
export const CopyRightText = styled.p`
    color: ${props => props.theme.textColor
    };
    margin: 20px 0;
    @media (max-width: 991px){
        margin: 8px 0;
    }
`
export const FooterSocialLinks = styled.ul`
    display: flex;
    align-items: center;
    gap: 14px;
`

export const SocialLink = styled(Link)`
    font-size: 20px;
    transition: 0.3s ease-in-out;
    color: ${props => props.theme.titleColor
    };
    display: inline-block;
    &:hover{
        transform: translateY(-4px);
    }
`

export const FooterTitle = styled.h4`
font-size: 20px;
color: ${props => props.theme.titleColor
    };
font-weight: 500;
`

export const FooterText = styled.p`
    color: ${props => props.theme.textColor};
    font-size: 17px;
    @media (max-width : 991px){
        font-size: 14px;
    }
`

export const FooterLink = styled(Link)`
transition: all 0.3s ease-in-out;
display: block;
padding: 5px 0;
    color: ${props => props.theme.titleColor};   
    &:hover{
        transform: translateX(10px);
    }
`


export const InputBox = styled.div`
    position: relative;
    width: 100%;
    border-radius: 12px;
    display: flex;
    align-items: center;
    height: 52px;
    input{
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 1;
        background-color: transparent;
        padding: 0 14px;
        border-radius: 8px 0 0 8px;
        outline: none;
        border-width: 1px 0 1px 1px;
        border-style: solid;
        transition: 0.3s ease-in-out;
        border-color: ${props => props.theme.borderColorLight};
        color: ${props => props.theme.textColor};
        padding-top: 10px;
        &:focus{
            border-color: ${props => props.theme.borderColor};
            
        }
        &[value=""]{
            +label{
                top: 50%;
                font-size: 16px;
            }
            &:focus{
                border-color: ${props => props.theme.borderColor};
                +label{
                    font-size: 12px;
                    top: 25%;
                }
            }
        }
    }
    label{
        transition: 0.1s ease-in-out;
        position: absolute;
        z-index: 0;
        /* top: 50%; */
        top: 25%;
        font-size: 12px;
        left: 14px;
        transform: translateY(-50%);
        color: ${props => props.theme.labelColor};
    }
    ${CommonBtn}{
        border-radius: 0 8px 8px 0;
        padding-top: 0;
        padding-bottom: 0;
        line-height: 1;
        display: inline-flex;
        align-items: center;
        height: 100%;
        &:hover{
            transform: unset;
        }
    }
`
