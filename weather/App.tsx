import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.v1}></View>
      <View style={styles.v2}></View>
      <View style={styles.v3}></View>
    </View>
  );
}

const size = {
  flex: 1,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  v1: {
    ...size,
    backgroundColor: 'tomato',
  },
  v2: {
    ...size,
    flex: 2,
    backgroundColor: 'teal',
  },
  v3: {
    ...size,
    backgroundColor: 'orange',
  },
});
