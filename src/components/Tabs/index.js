import React from 'react';

import PropTypes from 'prop-types';

import {
  ContainerWrap,
  Container,
  Icon,
  TitleWrap,
  Title,
  Subtitle,
  TabsWrap,
  Box,
  ButtonSellMyCar,
  WrapButtons,
} from './styles';

export default function Tabs({ options, setTabActive, tabActive, children }) {
  return (
    <ContainerWrap>
      <WrapButtons>
        <Container>
          {options.length &&
            options.map(option => (
              <TabsWrap
                key={option.id}
                active={option.id === tabActive}
                onClick={() => {
                  setTabActive(option.id);
                }}
              >
                <Icon>{option.Icon}</Icon>
                <TitleWrap>
                  <Title>{option.title}</Title>
                  <Subtitle>{option.subtitle}</Subtitle>
                </TitleWrap>
              </TabsWrap>
            ))}
        </Container>
        <ButtonSellMyCar secondary type="button">
          Vender meu carro
        </ButtonSellMyCar>
      </WrapButtons>

      <Box>{children}</Box>
    </ContainerWrap>
  );
}

Tabs.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
  setTabActive: PropTypes.func.isRequired,
  tabActive: PropTypes.number.isRequired,
};
