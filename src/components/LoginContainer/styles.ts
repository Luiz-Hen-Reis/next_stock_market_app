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
        color: ${theme.colors.darkSlateGrey};
       }
       }

       > div > form > div {
        display: flex;
      flex-flow: column wrap;
      margin-bottom: ${theme.spacings.small};

      >label {
        font-size: 1.8rem;
        color: ${theme.colors.darkSlateGrey};
        margin: .5rem 0;
      }

      > p {
        margin: 1rem;
       text-align: right;
        cursor: pointer;
        font-weight: 300;
        font-size: 1.4rem;
        color: ${theme.colors.darkSlateGrey};
      }

      >input {
        height: 5rem;
        border-radius: .4rem;
        outline: none;
        border: 1px solid ${theme.colors.darkSlateGrey};
        font-size: 1.6rem;
        padding-left: .8rem;

        &::placeholder {
            font-size: 1.6rem;
            color: ${theme.colors.darkSlateGrey};
        }
      }

      >input[type='submit'] {
        cursor: pointer;
        background-color: ${theme.colors.darkSlateGrey};
        margin-top: 2rem;
        transition: all ease .3s;
        color: ${theme.colors.white};
        font-weight: 500;

        &:hover {
            background-color: ${theme.colors.mediumGray};
            color: ${theme.colors.darkSlateGrey};
        }
      }
       }
       
    `}
`;
