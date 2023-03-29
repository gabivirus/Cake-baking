import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Bolochocolate() {
  return (
    <View style={styles.corpo}>
      <Text style={styles.titulo}>As melhores receitas de bolo</Text>
      <Image style={styles.imagem} source={require('../assets/bolochocolate.jpg')} />
      <Text style={styles.titulo2}>Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.

Adicione o fermento e misture com uma espátula delicadamente.

Em uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solução pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena.

CALDA
Em uma panela, aqueça a manteiga e misture o chocolate em pó até que esteja homogêneo.

Acrescente o creme de leite e misture bem até obter uma consistência cremosa.

Desligue o fogo e acrescente o açúcar.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  corpo: {
    fontWeight: 'bold'
  },
  titulo: {
    color: '#ED2424',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20
  },
  titulo2: {
    fontStyle: 'italic',
    fontSize: 20
  },
  imagem: {
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height: 200,
    resizeMode: 'center',
    borderRadius: 10,
    padding: 20
  },
});

