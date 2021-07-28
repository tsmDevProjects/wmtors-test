import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ButtonDefault({ type, secondary, children }) {
  return (
    <Container secondary={secondary} type={type}>
      {children}
    </Container>
  );
}

ButtonDefault.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  type: PropTypes.string,
  secondary: PropTypes.bool,
};

ButtonDefault.defaultProps = {
  children: {},
  type: 'button',
  secondary: false,
};
