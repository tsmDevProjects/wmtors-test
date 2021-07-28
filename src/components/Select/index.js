import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import Select, { components } from 'react-select';

import PropTypes from 'prop-types';

import { Container, Label } from './styles';

const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    border: state.isFocused ? '1px solid #666' : '1px solid #b6bac8',
    backgroundColor: '#fff',
    fontSize: '12px',
    boxShadow: 'none',
    fontWeight: 'bold',
    color: '#333!important',

    '&:hover': {
      border: '1px solid #b6bac8',
    },
  }),

  indicatorSeparator: styles => ({ ...styles, display: 'none' }),
  valueContainer: styles => ({
    ...styles,
    minHeight: '40px',
  }),

  option: styles => ({
    ...styles,
    backgroundColor: '#fff',
    color: '#858585',
    padding: 7,
    textTransform: 'uppercase',
    fontSize: '12px',
    '&:hover': {
      backgroundColor: '#f3123c',
      color: '#fff',
    },
  }),
};

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <FaCaretDown />
  </components.DropdownIndicator>
);

const ComponentSelect = ({
  options,
  placeholder,
  onChange,
  label,
  Icon,
  ...props
}) => (
  <>
    <Container isLabel={!!label} isIcon={!!Icon}>
      <Select
        {...props}
        drop
        components={{ DropdownIndicator }}
        options={options}
        styles={colourStyles}
        placeholder={placeholder || 'Selecione'}
        onChange={onChange}
        maxMenuHeight={210}
      />
      {Icon && <Icon size={20} />}
      {label && <Label>{label}</Label>}
    </Container>
  </>
);

ComponentSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  Icon: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
};

ComponentSelect.defaultProps = {
  options: [],
  placeholder: '',
  label: '',
  onChange: () => {},
  Icon: false,
};

export default ComponentSelect;
