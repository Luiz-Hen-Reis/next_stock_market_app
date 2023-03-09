import styled, { css } from 'styled-components';

export const Container = styled.section`
    ${({ theme }) => css`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        margin: 1.2rem;

        p {
            margin: 1rem;
            display: block;
            text-align: center;
        }

        form {
            display: flex;
            width: 100%;
            height: 4rem;
            margin-top: 2rem;

            input {
                flex: 1;
                outline: none;
                border: 1px solid ${theme.colors.darkSlateGrey};
                padding: ${theme.spacings.xsmall};
            }

            button {
                width: 7.6rem;
                cursor: pointer;
                background-color: ${theme.colors.darkSlateGrey};
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
