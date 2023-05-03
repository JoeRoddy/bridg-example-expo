import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useAsync } from './hooks/useAsync';

export default function App() {
  const [data] = useAsync(() => fetch(`/.netlify/functions/hello`).then((r) => r.json()));

  console.log('data:', data);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data, null, 1)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
