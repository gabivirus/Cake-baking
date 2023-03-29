import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Bolofuba() {
  return (
    <View style={styles.corpo}>
      <Text style={styles.titulo}>As melhores receitas de bolo</Text>
      <Image style={styles.imagem} source={require('../assets/bolofuba.jpg')} />
      <Text style={styles.titulo2}>Bata todos os ingredientes no liquidificador.

Coloque em uma forma untada e enfarinhada.

Leve ao forno preaquecido e deixe assar, por cerca de 40 minutos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  corpo: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  titulo2: {
    fontStyle: 'italic',
    fontSize: 20
  },
  titulo: {
    color: '#ED2424',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20
  },
  imagem: {
    marginTop: 5,
    marginBottom: 5,
    width: 300,
    height: 200,
    resizeMode: 'center',
    borderRadius: 10,
    padding: 20
  }
});