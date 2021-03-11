import React from 'react';
import {
  Body,
  Background,
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

const TabletSignIn = ({children, loading, onSubmit}) => {
  return (
    <Body>
      <Background source={BackgroundImage} />
      <Container>
        <Title>Olá, seja bem-vindo!</Title>
        <Subtitle>{'Para acessar a plataforma,\nfaça seu login.'}</Subtitle>
        <Form>
          {children}
          <SubmitButton loading={loading} onPress={onSubmit}>
            Entrar
          </SubmitButton>
        </Form>
        <ForgotPasswordButton>
          <ForgotPasswordText>
            {`Esqueceu seu login ou senha?\n Clique `}
            <Link>aqui</Link>
          </ForgotPasswordText>
        </ForgotPasswordButton>
      </Container>
    </Body>
  );
};

export default TabletSignIn;
