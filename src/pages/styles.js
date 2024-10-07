import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';









export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;





export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  background-color: #3498db;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;

export const Header = styled.View`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const Avatarperfil = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Nameperfil = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bioperfil = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
//33333333333333333333333333333333333333333333333

// styles.js


export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #007bff;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const List = styled.FlatList``;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Status = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

export const Species = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

export const Gender = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

export const Location = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

export const FirstEpisode = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

export const RemoveButton = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: #ff4d4d;
  padding: 10px;
  border-radius: 5px;
`;

export const RemoveButtonText = styled.Text`
  color: white;
`;

export const DetailsButton = styled.TouchableOpacity`
  background: #008CBA;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;

export const DetailsButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;