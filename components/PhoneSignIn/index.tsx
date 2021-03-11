import React from 'react';
import {
  Body,
  Background,
  Card,
  Container,
  Title,
  Subtitle,
  Form,
  SubmitButton,
  ForgotPasswordButton,
  ForgotPasswordText,
  Link,
} from './styles';
import BackgroundImage from '../../assets/images/background.png';

const PhoneSignIn = ({children, loading, onSubmit}) => {
  return (
    <Body>
      <Background source={BackgroundImage} />
      <Card>
        <Container>
          <Title>{'Olá, seja\nbem-vindo!'}</Title>
          <Subtitle>{'Para acessar a plataforma, faça seu login.'}</Subtitle>
          <Form>{children}</Form>
        </Container>
        <SubmitButton loading={loading} onPress={onSubmit}>
          Entrar
        </SubmitButton>
      </Card>
      <ForgotPasswordButton>
        <ForgotPasswordText>
          {`Esqueceu seu login ou senha?\n Clique `}
          <Link>aqui</Link>
        </ForgotPasswordText>
      </ForgotPasswordButton>
    </Body>
  );
};

export default PhoneSignIn;
