import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Accel from './components/Accelerometer'
import Gyro from './components/Gyroscope';
import Barom from './components/Barometer';
import Magno from './components/Magnometer';
import Pedom from './components/Pedometer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Accel />
      {/* <Gyro /> */}
      {/* <Barom /> */}
      {/* <Magno /> */}
      {/* <Pedom /> */}
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
