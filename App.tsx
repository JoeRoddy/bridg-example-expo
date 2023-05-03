import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useAsync } from './hooks/useAsync';
import db from 'bridg/app/client/db';

export default function App() {
  const [data] = useAsync(() => db.user.findMany({ include: { blogs: true } }));

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
