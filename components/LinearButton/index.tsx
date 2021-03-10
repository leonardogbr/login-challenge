import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Button, Container, ButtonText} from './styles';
const LinearButton = ({
  children,
  colors,
  start = {x: 0, y: 0},
  end = {x: 1, y: 0},
  loading,
  ...rest
}: any) => (
  <Button {...rest}>
    <Container colors={colors} start={start} end={end}>
      {loading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </Container>
  </Button>
);

export default LinearButton;
