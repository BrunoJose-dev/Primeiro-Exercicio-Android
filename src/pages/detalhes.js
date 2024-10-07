import React from 'react';
import { View, Text, Image } from 'react-native';

const Detalhes = ({ route }) => {
  // Acesse o parâmetro character
  const { character } = route.params || {}; // Adicione uma verificação para evitar acesso a undefined

  if (!character) {
    return <Text>Detalhes não disponíveis</Text>; // Tratamento de erro caso character não esteja definido
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{ uri: character.avatar }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Nome: {character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Espécie: {character.species}</Text>
      <Text>Gênero: {character.gender}</Text>
      <Text>Última localização: {character.location}</Text>
      <Text>Primeiro episódio: {character.firstEpisode}</Text>
    </View>
  );
};

export default Detalhes;
