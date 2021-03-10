import styled from 'styled-components/native';
import LinearButton from '../../components/LinearButton';

export const Body = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Background = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 0.35;
  height: 100%;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  background-color: #faf5ff;
  padding: 20px 30px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 40px;
  line-height: 48px;
  color: #383e71;
`;

export const Subtitle = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 16px;
  color: #989fdb;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0;
`;

export const SubmitButton = styled(LinearButton).attrs({
  colors: ['#9D25B0', '#383E71'],
})`
  margin-top: 5px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #989fdb;
`;

export const Link = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  line-height: 20px;
  color: #9d25b0;
  text-decoration: underline;
`;
