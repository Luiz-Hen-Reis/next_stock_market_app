import styled, { css } from 'styled-components';
import { Container as Heading } from '../Heading/styles';

export const Container = styled.header`
    ${({ theme }) => css`
    background-color: ${theme.colors.darkSlateGrey};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    justify-content: space-between;

        > span {
            color: ${theme.colors.primaryColor};
            display: flex;
            align-items: center;

            > ${Heading} {
                font-size: 1.4rem;
            }
        }

        > nav {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
            gap: .5rem;

            div {
                display: flex;
                align-items: center;
                gap: .2rem;

                p {
                margin: 0;
                color: ${theme.colors.primaryColor};
            }
            }

            button {
            all: unset;
            color: ${theme.colors.mediumGray};
            font-size: 1.4rem;
            cursor: pointer;
        }

        a {
            all: unset;
            color: ${theme.colors.mediumGray};
            font-size: 1.2rem;
            cursor: pointer;
            margin-right: 1rem;
            border-bottom: 1px dotted ${theme.colors.mediumGray};
            transition: all ease .3s;

            &:hover {
                color: ${theme.colors.primaryColor};
                border-bottom: 1px dotted ${theme.colors.primaryColor};
            }
        }
        }

    `}
`;
