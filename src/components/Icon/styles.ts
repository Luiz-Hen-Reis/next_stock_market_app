import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.primaryColor};
        text-align: center;
    `}
`;