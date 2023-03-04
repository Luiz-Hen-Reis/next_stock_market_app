import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 ${theme.spacings.xsmall};
    max-width: 900px;
    margin: auto;
    `}
`;
