import React, {useState} from 'react';

import Card from './components/Card';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import pratos from './mock/pratos.json';

function getMoney(value) {
  if (!value || isNaN(value)) {
    return 0;
  }
  return `R$ ${String(value.toFixed(2)).replace('.', ',')}`;
}

function getContainsGluten(value) {
  if (value) {
    return 'Sim';
  } else {
    return 'Não';
  }
}

const Prato = ({prato = {}}) => {
  const [showInfo, setShowInfo] = useState(false);

  const styleShow = {display: !showInfo ? 'flex' : 'none'};
  const styleHide = {display: showInfo ? 'flex' : 'none'};

  return (
    <Card margin={5} onPress={() => setShowInfo(!showInfo)}>
      <View>
        <Text style={styles.pratoTitle}>{prato.name}</Text>
        <Text style={styles.pratoPrice}>{getMoney(prato.price)}</Text>
        <Text style={styleShow}>Pressione para detalhes</Text>
      </View>
      <View style={styleHide}>
        <Image
          source={{uri: prato.image}}
          style={styles.pratoImage}
          resizeMode="contain"
        />
        <Text>{prato.description}</Text>
        <Text style={styles.pratoInfo}>
          Contém glúten? {getContainsGluten(prato.containsGluten)}
        </Text>
        <Text style={styles.pratoInfo}>Calorias: {prato.calories} kcal</Text>
      </View>
    </Card>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentContainerStyle={styles.container}
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>Pratos</Text>

        {pratos.map(prato => (
          <Prato key={prato.id} prato={prato} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  pratoContainer: {
    width: '100%',
  },
  pratoImage: {
    height: 300,
    borderRadius: 4,
  },
  pratoTitle: {
    fontSize: 18,
  },
  pratoPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pratoInfo: {
    marginTop: 10,
  },
});

export default App;
