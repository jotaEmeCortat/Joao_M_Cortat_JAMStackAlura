import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../commons/Text';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  type,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputWrapper>
  );
}

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraphy',
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
