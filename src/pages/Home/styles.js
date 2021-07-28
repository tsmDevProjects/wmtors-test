import { shade } from 'polished';
import styled, { css } from 'styled-components';

import ButtonComponent from '../../components/Button';
import CheckBoxComponent from '../../components/CheckBox';
import SelectComponent from '../../components/Select';
import TabsComponent from '../../components/Tabs';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled(TabsComponent)``;

export const WrapCheckBox = styled.div`
  display: flex;
`;

export const CheckBox = styled(CheckBoxComponent)``;

export const Select = styled(SelectComponent)`
  width: ${({ col }) => col || 900}px;

  [class$='control'] {
    ${({ left }) =>
      left &&
      css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `}

    ${({ right }) =>
      right &&
      css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `}

      & + div {
      margin-top: 16px;
    }
  }

  @media only screen and (max-width: 970px) {
    width: 100%;
  }
`;

export const FormCol = styled.div`
  display: flex;
  width: 100%;
  margin-right: 16px;

  & + div {
    margin-right: unset;
  }

  @media only screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: unset;

    & + div {
      margin-top: 16px;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  width: 100%;

  margin-top: 16px;

  @media only screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const GroupSelect = styled.div`
  display: flex;
  width: 100%;
`;

export const LinkAdvancedSearch = styled.div`
  color: #f3123c;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: ${shade(0.2, '#f3123c')};
  }

  @media only screen and (max-width: 970px) {
    margin-bottom: 16px;
  }
`;

export const ButtonClear = styled.div`
  margin-right: 16px;

  color: #808080;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${shade(0.2, '#808080')};
  }

  @media only screen and (max-width: 970px) {
    margin-bottom: 16px;
  }
`;

export const ButtonSeeOffers = styled(ButtonComponent)``;

export const FooterWrap = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const GroupButtons = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
