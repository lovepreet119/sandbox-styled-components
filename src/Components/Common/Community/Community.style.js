import styled from "styled-components";
import { GradientText, TitleText } from "../GlobalStyle/GlobalStyle";

export const CommunitySec = styled.section`
`

export const CommunitySecWrapper = styled.div`
padding: 90px 0;
text-align: center;
background: ${props => props.theme.background_gradient};
@media (min-width: 1480px) {
    border-radius: 20px;
}

${GradientText}{
    font-weight: 600;
}
${TitleText}{
    margin: 35px 0 ;
    @media (max-width: 1199px){
        margin: 25px 0;
    }
}

`
