import styled, { css } from "styled-components";

type ButtonDefaultProps = {
  mtop?: number;
};

export const ButtonContainerDefault = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

export const ImageButtonDefault = styled.img`
  width: 40px;
  height: 40px;
`;

export const ButtonDefault = styled.button`
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  height: 4rem;
  padding: 0.3rem 1rem;
  margin-right: 0.2rem;
  max-width: 20rem;
  min-width: 20rem;
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_100};
    color: ${theme.colors.white_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const ButtonLarge = styled.button<ButtonDefaultProps>`
  position: relative;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  height: 4rem;
  padding: 0.3rem 1rem;
  margin-right: 0.2rem;
  max-width: 20rem;
  min-width: 20rem;
  & > div {
    display: block !important;
    position: absolute !important;
    top: 0;
    bottom: 0;
    right: -55px;
  }
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_100};
    color: ${theme.colors.white_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const ButtonMedium = styled.button`
  ${({ theme }) => css<ButtonDefaultProps>`
    position: relative;
    background-color: ${theme.colors.blue_50};
    color: ${theme.colors.white_100};
    border-radius: 0.25rem 0 0 0.25rem;
    font-size: 1.2rem;
    font-weight: 700;
    height: 4rem;
    padding: 0.3rem 1rem;
    margin-right: 0.2rem;
    max-width: 20rem;
    min-width: 20rem;
    margin-top: ${(props) => (props.mtop ? props.mtop : 0)}px;

    & > div {
      position: absolute;
      top: 0;
      bottom: 0;
      right: -50px;
      background-color: ${theme.colors.blue_100};
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0 0.25rem 0.25rem 0;
    }

    & > svg {
      position: absolute;
      height: 20px;
      width: 20px;
    }

    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const ButtonSmall = styled.button`
  position: relative;
  & > div {
    display: block !important;
    position: absolute !important;
    top: 0;
    bottom: 0;
    right: -35px;
  }
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_100};
    color: ${theme.colors.white_100};
    border-radius: 0.3rem;
    font-size: 0.8rem;
    font-weight: 700;
    height: 2rem;
    padding: 0.3rem 1rem;
    margin-right: 0.2rem;
    max-width: 13rem;
    min-width: 13rem;
    margin-bottom: 1rem;
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const ButtonFull = styled.button`
  position: relative;
  & > div {
    display: block !important;
    position: absolute !important;
    top: 0;
    bottom: 0;
    right: -40px;
  }
  ${({ theme }) => css`
    background-color: ${theme.colors.blue_100};
    color: ${theme.colors.white_100};
    border-radius: 0.3rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    padding: 0.3rem 1rem;
    margin-right: 0.2rem;
    width: 100%;
    font-weight: bold;
    height: 3rem;

    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const ButtonSearch = styled.button`
  position: relative;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  height: 4rem;
  padding: 0.3rem 1rem;
  margin-right: 0.2rem;
  max-width: 20rem;
  min-width: 20rem;

  & > div {
    display: block !important;
    position: absolute !important;
    top: 0;
    bottom: 0;
    right: -55px;
  }
  ${({ theme }) => css`
    background-color: ${theme.colors.green_100};
    color: ${theme.colors.white_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const ButtonLink = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    background-color: transparent;
    color: ${theme.colors.gray_50};

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }

    & svg {
      margin-right: 0.5rem;
    }

    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;
