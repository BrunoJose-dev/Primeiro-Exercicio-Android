import React, { Component } from 'react';
import { Keyboard, ActivityIndicator, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Importar o hook para navegação

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Card,
  Avatar,
  Name,
  Status,
  Species,
  Gender,
  Location,
  FirstEpisode,
  RemoveButton,
  RemoveButtonText,
  DetailsButton,
  DetailsButtonText,
} from './styles';

import api from '../services/api';

export default class Main extends Component {
  state = {
    newCharacterID: '',
    characters: [],
    loading: false,
  };

  async componentDidMount() {
    const characters = await AsyncStorage.getItem('characters');
    if (characters) {
      this.setState({ characters: JSON.parse(characters) });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { characters } = this.state;

    if (prevState.characters !== characters) {
      await AsyncStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  handleAddCharacter = async () => {
    try {
      const { characters, newCharacterID } = this.state;
      this.setState({ loading: true });

      const response = await api.get(`/character/${newCharacterID}`);

      if (characters.find(character => character.id === response.data.id)) {
        alert('Personagem já adicionado!');
        this.setState({ loading: false });
        return;
      }

      const data = {
        id: response.data.id,
        name: response.data.name,
        status: response.data.status,
        species: response.data.species,
        gender: response.data.gender,
        location: response.data.location.name,
        firstEpisode: response.data.episode[0],
        avatar: response.data.image,
      };

      this.setState({
        characters: [...characters, data],
        newCharacterID: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      alert('Personagem não encontrado!');
      this.setState({ loading: false });
    }
  };

  render() {
    const { characters, newCharacterID, loading } = this.state;
    const navigation = this.props.navigation; // Recebendo a navegação via props

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar ID do personagem"
            value={newCharacterID}
            onChangeText={text => this.setState({ newCharacterID: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddCharacter}
          />
          <SubmitButton loading={loading} onPress={this.handleAddCharacter}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={22} color="#fff" />
            )}
          </SubmitButton>
        </Form>
        <ScrollView showsVerticalScrollIndicator={false}>
          <List
            data={characters}
            keyExtractor={character => character.id.toString()}
            renderItem={({ item }) => (
                <Card>
                  <Avatar source={{ uri: item.avatar }} />
                  <Name>{item.name}</Name>
                  <Status>Status: {item.status}</Status>
                  <Species>Espécie: {item.species}</Species>
                  <Gender>Gênero: {item.gender}</Gender>
                  <Location>Última localização: {item.location}</Location>
                  <FirstEpisode>Primeiro episódio: {item.firstEpisode}</FirstEpisode>
              
                  {/* Botão para Ver Mais Detalhes */}
                  <DetailsButton
                    onPress={() => {
                      // Navegue para a tela Detalhes passando o personagem como parâmetro
                      this.props.navigation.navigate('Detalhes', { character: item });
                    }}
                  >
                    <DetailsButtonText>Ver Mais Detalhes</DetailsButtonText>
                  </DetailsButton>
              
                  <RemoveButton
                    onPress={() => {
                      this.setState({
                        characters: this.state.characters.filter(
                          character => character.id !== item.id,
                        ),
                      });
                    }}
                    style={{ backgroundColor: '#FFC0CB' }}
                  >
                    <RemoveButtonText>Excluir</RemoveButtonText>
                  </RemoveButton>
                </Card>
            )}
          />
        </ScrollView>
      </Container>
    );
  }
}
