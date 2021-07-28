import styled, { css } from 'styled-components';

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0.5rem;

  font-weight: normal;
  font-size: 13px;
  transform: translateY(-50%);
  
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  ${({ isLabel }) =>
    isLabel &&
    css`
      [class$='control'] {
        padding-left: ${({ isIcon }) => (isIcon ? '55px' : '48px')};
      }
    `}

  ${({ isIcon }) =>
    isIcon &&
    css`
      > svg {
        position: absolute;
        top: 10px;
        left: 5px;

        fill: #f3123c;
      }
      ${Label} {
        padding-left: 20px;
      }
    `}
`;
