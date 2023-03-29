import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Bolomilho() {
  return (
    <View style={styles.corpo}>
      <Text style={styles.titulo}>As melhores receitas de bolo</Text>
      <Image style={styles.imagem} source={require('../assets/bolomilho.jpg')} />
      <Text style={styles.titulo2}>Escorra o milho e use a própria lata para as medidas.

Unte e enfarinhe uma forma de bolo com furo.

Preaqueça o forno.

Coloque no liquidificador o milho (já escorrido), o leite, açúcar, flocão de milho, óleo, ovos e bata bem até que o milho fique bem moído.

Se quiser, pode acrescentar duas colheres de sopa de coco ralado.

Acrescente o fermento em pó e pulse o liquidificador 3 vezes.

Despeje essa massa na forma e leve ao forno médio.

Deixe assar por, aproximadamente, 40 minutos.

Faça o teste do palito e observe um tom dourado médio, para saber que o bolo está pronto.

Espere esfriar totalmente para desenformar.</Text>
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