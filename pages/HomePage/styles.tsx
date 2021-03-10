import styled from 'styled-components/native';
import LinearButton from '../../components/LinearButton';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 20px;
  color: #383e71;
`;

export const SignoutButton = styled(LinearButton).attrs({
  colors: ['#9D25B0', '#383E71'],
})`
  margin-top: 5px;
`;
