import styled, { css } from 'styled-components';
import { Container as Heading } from '../Heading/styles';

export const Container = styled.div`
    ${({ theme }) => css`
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       background-color: ${theme.colors.darkSlateGrey};
       padding: 0 ${theme.spacings.xsmall};
       display: flex;
       flex-flow: column nowrap;

       > header {
        margin: ${theme.spacings.xxlarge} 0;

        & ${Heading} {
        font-size: 3.1rem;
        text-align: center;
       }
       }
    `}
`;