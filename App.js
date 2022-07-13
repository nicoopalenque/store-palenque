import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import CreateTaskScreen from './screens/CreateTaskScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CreateTaskScreen />
      <SafeAreaView style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
});
