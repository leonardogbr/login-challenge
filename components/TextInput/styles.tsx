import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 10px;
  color: #383e71;
  text-transform: uppercase;
  margin-left: 10px;
`;

export const InputContainer: any = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  border: 1px solid ${(props: any) => (props.invalid ? '#ff377f' : '#989fdb')};
  border-radius: 8px;
  margin: 5px 0;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#989fdb',
  textAlignVertical: 'center',
})`
  flex: 1;
  font-family: 'Montserrat-Regular';
  font-size: 10px;
  color: #383e71;
`;

export const InvalidIcon = styled(Icon).attrs({
  name: 'close',
  size: 15,
  color: '#ff377f',
})``;

export const InvalidMessage = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 10px;
  color: #ff377f;
  margin-left: 16px;
`;
