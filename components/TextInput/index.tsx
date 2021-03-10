import React, {forwardRef} from 'react';
import {TextInput} from 'react-native';
import {
  Container,
  Label,
  InputContainer,
  Input,
  InvalidIcon,
  InvalidMessage,
} from './styles';

const CustomInput = (
  {invalid, invalidMessage, label, ...rest}: any,
  ref?: React.Ref<TextInput>,
) => (
  <Container>
    <Label>{label}</Label>
    <InputContainer invalid={invalid}>
      <Input ref={ref} {...rest} />
      {invalid && <InvalidIcon />}
    </InputContainer>
    {invalid && <InvalidMessage>{invalidMessage}</InvalidMessage>}
  </Container>
);

export default forwardRef(CustomInput);
