import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 933px;
  max-width: 933px;
  max-height: 312px;
  padding: 20px 50px;
  background-color: #fff;

  @media only screen and (max-width: 969px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: unset;
  }
`;
