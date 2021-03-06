import styled from 'styled-components/native';
import {Platform} from 'react-native';
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
  margin-bottom: 5px;
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
  padding: ${Platform.OS == 'ios' ? '16px' : '10px'} 0;
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
  margin-top: 5px;
`;
