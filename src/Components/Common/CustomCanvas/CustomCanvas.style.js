import styled from "styled-components";
import { Sidebar } from "../Header/Header.style";

export const CanvasBackdrop = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.theme.backdropColor};
transition: 0.3s ease-in-out;
`

export const CustomCanvasOuter = styled.div`
    position: fixed;
    transition: 0.2s ease-in-out;
    width: 100%;
    height: 100vh;
    opacity: 0;
    z-index: 10001;
    top: 0;
    @media (min-width: 992px){
        display: none;
    }
    &.show_canvas{
        opacity: 1;
        ${Sidebar}{
            transform: translateX(0);
        }
    }
`