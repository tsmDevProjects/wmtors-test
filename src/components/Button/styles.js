import { shade } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  background-color: #f3123c;
  color: #fff;
  font-weight: 500;
  font-size: 16px;

  &:hover {
    background-color: ${shade(0.2, '#f3123c')};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      width: 300px;
      height: 50px;
      border: 2px solid #eaa406;
      background-color: transparent;
      color: #eaa406;
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 8px;
      transition: all 0.2s;

      &:hover {
        background-color: #eaa406;
        color: #fff;
      }
    `}

  @media only screen and (max-width: 969px) {
    width: 100%;

    ${({ secondary }) =>
      secondary &&
      css`
        display: none;
      `}
  }
`;
