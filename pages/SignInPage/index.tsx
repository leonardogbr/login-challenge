import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signInRequest} from '../../store/modules/auth/actions';
import Input from '../../components/TextInput';
import {emailRegex} from '../../services/helper.service';
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

const SignInPage = ({navigation, route}: any) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const loading = useSelector((state: any) => state.auth.loading);
  const signed = useSelector((state: any) => state.auth.signed);

  useEffect(() => {
    if (signed) navigation.navigate('HomePage');
  }, [signed]);

  const onSubmit = async () => {
    const _invalidEmail = !email || !emailRegex.test(email);
    const _invalidPassword = !password;

    setInvalidEmail(_invalidEmail);
    setInvalidPassword(_invalidPassword);

    const validForm = !_invalidEmail && !_invalidPassword;

    if (validForm) dispatch(signInRequest(email, password));
  };

  return (
    <Body>
      <Background source={BackgroundImage} />
      <Container>
        <Title>Olá, seja bem-vindo!</Title>
        <Subtitle>{'Para acessar a plataforma,\nfaça seu login.'}</Subtitle>
        <Form>
          <Input
            label="E-Mail"
            placeholder="user.name@mail.com"
            value={email}
            onChangeText={setEmail}
            invalid={invalidEmail}
            invalidMessage={'Digite um e-mail válido'}
          />
          <Input
            label="Senha"
            placeholder="----------"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            invalid={invalidPassword}
            invalidMessage={'Digite uma senha válida'}
          />
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

export default SignInPage;
