import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        margin: ${theme.spacings.xsmall};
    `}
`;