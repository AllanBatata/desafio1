import { StyleSheet, Text, View } from 'react-native';
import Form from './scr/components/Form';
import Title from './scr/components/Title';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Title/>
      <Form/>
      
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
