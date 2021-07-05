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
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;
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
      {isFieldInvalid && (
        <Text
          variant="paragraphy"
          tag="p"
          color="error.main"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraphy',
};

TextField.defaultProps = {
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};
