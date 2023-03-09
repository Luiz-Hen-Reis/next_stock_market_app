import styled, { css } from 'styled-components';

export const Container = styled.nav`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    `}
`;

export const Post = styled.article`
    ${({ theme }) => css`
    background-color: ${theme.colors.mediumGray};
    border-radius: 2rem;
    height: fit-content;

        a {
            all: unset;
            cursor: pointer;
        }

        header, p {
            margin: 2rem;
        }

        img {
            width: 100%;
            height: 40rem;
        }
    `}
`;
