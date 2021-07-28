import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  align-items: center;
`;

export const FakeCheckbox = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  margin: 0 9px 0 0;
  border: 1px solid #000;
  border-radius: 2px;
  background: #fff;
  cursor: pointer;
`;

export const Label = styled.label`
  margin-top: 3px;
  margin-left: 8px;
  color: #808080;
`;

export const Icon = styled(FaCheck)``;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;
