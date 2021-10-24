import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    height: 80px;
    /* padding: 1rem 0 1rem 0; */
    background: ${theme.colors.blue_50};
    @media only screen and ${theme.medias.mx} {
      height: auto;
    }
  `}
`;
