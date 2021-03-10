import React from 'react';
import {useDispatch} from 'react-redux';
import {signOut} from '../../store/modules/auth/actions';
import {Container, Title, SignoutButton} from './styles';

const HomePage = () => {
  const dispatch = useDispatch();

  const onSubmit = async () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Title>Você se logou com sucesso! :D</Title>
      <SignoutButton onPress={onSubmit}>Sair</SignoutButton>
    </Container>
  );
};

export default HomePage;
