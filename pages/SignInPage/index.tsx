import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isTablet} from 'react-native-device-info';
import {signInRequest} from '../../store/modules/auth/actions';
import Input from '../../components/TextInput';
import {emailRegex} from '../../services/helper.service';
import TabletSignIn from '../../components/TabletSignIn';
import PhoneSignIn from '../../components/PhoneSignIn';

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

  const formComponent = () => (
    <>
      <Input
        label="E-Mail"
        placeholder="user.name@mail.com"
        keyboardType="email-address"
        autoCapitalize="none"
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
    </>
  );

  return isTablet() ? (
    <TabletSignIn loading={loading} onSubmit={onSubmit}>
      {formComponent()}
    </TabletSignIn>
  ) : (
    <PhoneSignIn loading={loading} onSubmit={onSubmit}>
      {formComponent()}
    </PhoneSignIn>
  );
};

export default SignInPage;
