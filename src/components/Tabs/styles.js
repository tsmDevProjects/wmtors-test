import styled, { css } from 'styled-components';

import ButtonComponent from '../Button';
import BoxComponent from './Box';

export const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: baseline;
  justify-content: center;
`;

export const WrapButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 933px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Icon = styled.div`
  & + div {
    margin-right: 32px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const Title = styled.span`
  color: #909092;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Subtitle = styled.span`
  color: #f3123c;
  font-size: 28px;
  text-transform: uppercase;
`;

export const ButtonSellMyCar = styled(ButtonComponent)``;

export const TabsWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom: 3px solid #f3123c;
  cursor: pointer;

  transition: border 0.2s;

  ${({ active }) =>
    !active &&
    css`
      border-bottom: 1px solid #909092;

      span {
        color: #909092;
      }

      svg {
        fill: #909092;
      }
    `}
`;

export const Box = styled(BoxComponent)``;
