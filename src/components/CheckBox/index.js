import React from 'react';

import PropTypes from 'prop-types';

import { Label, Container, Checkbox, Icon, FakeCheckbox } from './styles';

export default function CheckboxWeb({ label, checked, name, ...props }) {
  return (
    <Container>
      <Label htmlFor={name}>
        <Checkbox checked={checked} {...props} />
        <FakeCheckbox checked={checked}>
          {checked && <Icon size={16} color="#f3123c" />}
        </FakeCheckbox>
        {label}
      </Label>
    </Container>
  );
}

CheckboxWeb.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

CheckboxWeb.defaultProps = {
  name: '',
  checked: false,
  label: '',
};
