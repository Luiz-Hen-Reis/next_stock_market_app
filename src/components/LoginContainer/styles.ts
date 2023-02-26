import styled, { css } from 'styled-components';
import { Container as Heading } from '../Heading/styles';

export const Container = styled.div`
    ${({ theme }) => css`
      max-width: 40rem;
      height: 100vh;
       padding: 0 ${theme.spacings.xsmall};
       display: flex;
       flex-flow: column nowrap;
       margin: auto;

       > header {
        margin: ${theme.spacings.xxlarge} 0;

        & ${Heading} {
        font-size: 3.1rem;
        text-align: center;
       }
       }

       > div > form > p {
       
       }

       > div > form > div {
        display: flex;
      flex-flow: column wrap;
      margin-bottom: ${theme.spacings.small};

      >label {
        font-size: 1.8rem;
        color: ${theme.colors.mediumGray};
        margin: .5rem 0;
      }

      > p {
        margin: 1rem;
       text-align: right;
        cursor: pointer;
        font-weight: 300;
        font-size: 1.4rem;
        color: ${theme.colors.mediumGray};
      }

      >input {
        height: 5rem;
        border-radius: .4rem;
        outline: none;
        border: none;
        font-size: 1.6rem;
        padding-left: .8rem;

        &::placeholder {
            font-size: 1.6rem;
            color: ${theme.colors.darkSlateGrey};
        }
      }

      >input[type='submit'] {
        cursor: pointer;
        margin-top: 2rem;
        transition: all ease .3s;

        &:hover {
            background-color: ${theme.colors.mediumGray};
        }
      }
       }
       
    `}
`;
